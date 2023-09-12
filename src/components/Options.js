import {useState} from 'react';
import {Button} from '@mui/material';

function Options(){

  const {_, navigate} = window.web;
  const values = [
    'change_language',
    'delete_data'
  ];
  const [active, setActive] = useState(0);
  const variant = idx => idx === active ? 'contained' : 'outlined';

  window.web.navigationOnClick = (e, dir) => {
    switch(dir){
      case 'up':
        setActive(active <= 0 ? values.length - 1 : active - 1);
        break;
      case 'down':
        setActive(active >= values.length - 1 ? 0 : active + 1)
        break;
      default:
        return;
    }
  };

  window.web.selectOnClick = (e) => navigate(values[active].replace('_', '-'));

  let i = 0;

  return (
    <>
      <Button
        fullWidth
        variant={variant(i)}
        children={_(values[i++])}/>
      <Button
        fullWidth
        sx={{my:1}}
        variant={variant(i)}
        children={_(values[i++])}/>
    </>
  );
};

export default Options;