import {Box} from '@mui/material';
import SnakeHead from 'components/SnakeHead';
import SnakeBody from 'components/SnakeBody';
import SnakeTail from 'components/SnakeTail';

export default () => {
  const {_} = window.web;
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
            direction="bottom"
            x={0}
            y={0}/>

          <SnakeBody
            x={1}
            y={1}/>

          <SnakeTail
            direction="right"
            x={2}
            y={2}/>

        </svg>
      </Box>
    </>
  );
};