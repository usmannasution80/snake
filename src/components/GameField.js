import {Box} from '@mui/material';
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
            direction={head[2]}
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