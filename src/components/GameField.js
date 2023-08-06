import {Box} from '@mui/material';

export default () => {
  return (
    <svg
      style={{width:'100%', background:'yellow'}}
      viewBox="0 0 20 20">
      <svg
        width={1}
        height={1}
        viewBox="0 0 5 5"
        fill="red"
        x={0}
        y={0}>
          <rect
            fill="red"
            x={0}
            y={0}
            width={5}/>
        </svg>
      <svg width="300" height="100" style={{fill:'rgb(0,0,255)',strokeWidth:3,stroke:'rgb(0,0,0)'}} />
    </svg>
  );
};