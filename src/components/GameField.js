import {Box} from '@mui/material';

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
          <svg width="300" height="100" style={{fill:'rgb(0,0,255)',strokeWidth:3,stroke:'rgb(0,0,0)'}} />
        </svg>
      </Box>
    </>
  );
};