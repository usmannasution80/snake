import {Box} from '@mui/material';
import {useRef, useEffect} from 'react';
import SnakeHead from 'components/SnakeHead';
import SnakeBody from 'components/SnakeBody';
import SnakeTail from 'components/SnakeTail';
import Food from 'components/Food';
import Obstacle from 'components/Obstacle';
import levels from 'levels';

function GameField(){
  const {
    _,
    strg,
    getHighscores,
    set,
    navigate
  } = window.web;
  const moveTimeout = useRef(null);
  const food = useRef(null);
  const level = parseInt(strg('level') || 0);
  const obstacles = levels[level];

  const getCoordinates = () => {
    if(strg('coordinates'))
      return JSON.parse(strg('coordinates'));
    const coordinates = [
      [0, 0, 'right'],
      [1, 0],
      [2, 0]
    ];
    strg('coordinates', JSON.stringify(coordinates), false);
    return coordinates;
  };

  const getScore = () => getCoordinates().length - 3;

  const gameOver = () => {
    navigate('/');
    clearTimeout(moveTimeout.current);
    let highscores = getHighscores();
    highscores.push({
      date : new Date().valueOf(),
      score : getScore()
    });
    strg('highscores', JSON.stringify(highscores), false);
    set('gameOverScore', getScore(), false);
  };

  const isBody = (x, y) => {
    const coordinates = getCoordinates();
    for(let i=0;i<coordinates.length;i++){
      let [x1, y1] = coordinates[i];
      if(x === x1 && y === y1)
        return true;
    }
    return false;
  };

  const isObstacle = (x, y) => {
    for(let i=0;i<obstacles.length;i++){
      let [x1, y1] = obstacles[i];
      if(x === x1 && y === y1)
        return true;
    }
    return false;
  };

  const isFood = (x, y) => {
    if(!food.current) return false;
    const [x1, y1] = food.current;
    return x === x1 && y === y1;
  };

  const refreshFood = () => {
    let x, y;
    do{
      x = Math.floor(Math.random() * 20);
      y = Math.floor(Math.random() * 20);
    }while(isBody(x, y) || isObstacle(x, y));
    food.current = [x, y];
  };

  const isOutsideField = (x, y) => {
    return x < 0 || x > 19 || y < 0 || y > 19;
  };

  const coordinates = getCoordinates();
  const len = coordinates.length;
  const head = coordinates[len - 1];
  const tail = coordinates[0];
  const interval = 500;

  const move = () => {
    if(moveTimeout.current){
      clearTimeout(moveTimeout.current);
      moveTimeout.current = null;
    }
    const crdnts = getCoordinates();
    let x2, y2;
    for(let i=crdnts.length-1;i>=0;i--){
      let [x, y] = crdnts[i];
      if(i === crdnts.length-1){
        let [x0, y0] = [x, y];
        switch(strg('direction')){
          case 'up':
            y0 = y - 1;
            break;
          case 'down':
            y0 = y + 1;
            break;
          case 'left':
            x0 = x - 1;
            break;
          default:
            x0 = x + 1;
        }
        if(isFood(x0, y0)){
          crdnts.push([x0, y0]);
          refreshFood();
          break;
        }
        if(isBody(x0, y0) || isObstacle(x0, y0) || isOutsideField(x0, y0))
          gameOver();
        crdnts[i][0] = x0;
        crdnts[i][1] = y0;
        x2 = x;
        y2 = y;
        continue;
      }
      crdnts[i][0] = x2;
      crdnts[i][1] = y2;
      if(i === 0){
        if(x2 > x)
          crdnts[i][2] = 'right';
        else if(x2 < x)
          crdnts[i][2] = 'left';
        else if(y2 > y)
          crdnts[i][2] = 'up';
        else
          crdnts[i][2] = 'down';
      }
      x2 = x;
      y2 = y;
    }
    strg('coordinates', JSON.stringify(crdnts));
    moveTimeout.current = setTimeout(move, interval);
  };

  window.web.navigationOnClick = (e, direction) => {
    const currentDirection = strg('direction') || 'right';

    if(direction === 'left' && currentDirection === 'right')
      return;
    if(direction === 'right' && currentDirection === 'left')
      return;
    if(direction === 'up' && currentDirection === 'down')
      return;
    if(direction === 'down' && currentDirection === 'up')
      return;
    console.log(`direction : ${direction} - currentDirection ${currentDirection}`)
    strg('direction', direction);

  };

  useEffect(() => {
    if(!moveTimeout.current)
      moveTimeout.current = setTimeout(move, interval);
    refreshFood();
    return () => {
      clearTimeout(moveTimeout.current);
      moveTimeout.current = null;
    }
  }, []);

  return (
    <>
      <Box
        sx={{textAlign:'center'}}
        children={_('score', {score : getScore()})}/>
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
            direction={strg('direction')}
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

          {
            obstacles.map(
              obs => <Obstacle x={obs[0]} y={obs[1]}/>
            )
          }

          {food.current &&
            <Food
              x={food.current[0]}
              y={food.current[1]}/>
          }

        </svg>
      </Box>
    </>
  );
};

export default GameField;
