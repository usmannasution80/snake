import {useState, useEffect} from 'react';
import {Button, Box} from '@mui/material';

function MainMenu(){

  const {
    _,
    navigate,
    dstrg,
    strg
  } = window.web;

  const sections = [
    'resume',
    'new_game',
    'highscores',
    'options'
  ];
  const [active, setActive] = useState(0);

  window.web.navigationOnClick = (e, direction) => {
    if(direction === 'up')
      setActive(active <= 0 ? sections.length - 1 : active - 1);
    else if(direction === 'down')
      setActive(active >= sections.length - 1 ? 0 : active + 1);
  };

  window.web.selectOnClick = e => {
    switch (active){
      case 0:
        navigate('/game');
        break;
      case 1:
        dstrg('coordinates');
        setTimeout(() => navigate('/game'), 10);
        break;
      case 2:
        navigate('/highscores');
        break;
      case 3:
        navigate('/options');
        break;
    }
  };

  const variant = section => section === sections[active] ? 'contained' : 'outlined';

  return (
    <>
      <Box
        sx={{p:0, m:0, my:1, textAlign:'center'}}
        component="h3"
        children={_('main_menu')}/>
      <Button
        fullWidth
        sx={{mb:1,display:strg('coordinates') ? undefined : 'none'}}
        variant={variant(sections[0])}
        children={_(sections[0])}/>
      <Button
        fullWidth
        variant={variant(sections[1])}
        children={_(sections[1])}/>
      <Button
        fullWidth
        variant={variant(sections[2])}
        sx={{my:1}}
        children={_(sections[2])}/>
      <Button
        fullWidth
        variant={variant(sections[3])}
        children={_(sections[3])}/>
    </>
  );
};

export default MainMenu;
