import {Box} from '@mui/material';
import {useRef, useEffect} from 'react';
import SnakeHead from 'components/SnakeHead';
import SnakeBody from 'components/SnakeBody';
import SnakeTail from 'components/SnakeTail';

export default () => {
  const {
    _,
    strg
  } = window.web;
  if(!strg('coordinates')){
    strg('coordinates', JSON.stringify([
      [0, 0, 'right'],
      [1, 0],
      [2, 0, 'right']
    ]));
    return <></>;
  }

  const coordinates = JSON.parse(strg('coordinates'));
  const len = coordinates.length;
  const head = coordinates[len - 1];
  const tail = coordinates[0];

  const direction = useRef('right');
  const moveTimeout = useRef(null);
  const move = () => {
    if(moveTimeout.current)
      clearTimeout(moveTimeout.current);
    const crdnts = [...coordinates];
    let x2, y2;
    for(let i=crdnts.length-1;i>=0;i--){
      let [x, y, z] = crdnts[i];
      if(i === crdnts.length-1){
        switch(direction.current){
          case 'up':
            crdnts[i][1] = y - 1;
            break;
          case 'down':
            crdnts[i][1] = y + 1;
            break;
          case 'left':
            crdnts[i][0] = x - 1;
            break;
          default:
            crdnts[i][0] = x + 1;
        }
        x2 = x;
        y2 = y;
        continue;
      }
      crdnts[i][0] = x2;
      crdnts[i][1] = y2;
      x2 = x;
      y2 = y;
    }
    strg('coordinates', JSON.stringify(crdnts));
    moveTimeout.current = setTimeout(move, 500);
  };

  window.web.navigationOnClick = (e, dir) => {
    direction.current = dir;
  };

  useEffect(() => {
    move();
  }, []);

  return (
    <>
      <Box
        sx={{textAlign:'center'}}
        children={_('score')}/>
      <Box sx={{background:'black', overflow:'hidden'}}>
        <svg
          style={{
            width:'calc(100% - 5px)',
            margin:'2.5px auto',
            display:'block',
            background:'white'
          }}
          viewBox="0 0 20 20">

          <SnakeHead
            direction={direction.current}
            x={head[0]}
            y={head[1]}/>

          {(() => {
            const bodies = [];
            for(let i = 1;i < len-1; i++){
              let [x, y] = coordinates[i];
              bodies.push(
                <SnakeBody
                  key={String(i)}
                  x={x}
                  y={y}/>
              );
            }
            return bodies;
          })()}

          <SnakeTail
            direction={tail[2]}
            x={tail[0]}
            y={tail[1]}/>

        </svg>
      </Box>
    </>
  );
};