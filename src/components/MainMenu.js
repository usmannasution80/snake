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
  const isThereSaved = !!strg('coordinates');
  const [active, setActive] = useState(isThereSaved ? 0 : 1);

  window.web.navigationOnClick = (e, direction) => {
    const min = isThereSaved ? 0 : 1;
    if(direction === 'up')
      setActive(active <= min ? sections.length - 1 : active - 1);
    else if(direction === 'down')
      setActive(active >= sections.length - 1 ? min : active + 1);
  };

  window.web.selectOnClick = e => {
    switch (sections[active]){
      case 'resume':
        navigate('/game');
        break;
      case 'new_game':
        dstrg('coordinates');
        dstrg('direction');
        setTimeout(() => navigate('/level-selection'), 10);
        break;
      case 'highscores':
        navigate('/highscores');
        break;
      case 'options':
        navigate('/options');
        break;
    }
  };

  const variant = section => section === sections[active] ? 'contained' : 'outlined';
  let i = isThereSaved ? 0 : 1;

  return (
    <>
      <Box
        sx={{p:0, m:0, my:1, textAlign:'center'}}
        component="h3"
        children={_('main_menu')}/>
      {isThereSaved &&
        <Button
          fullWidth
          sx={{mb:1}}
          variant={variant(sections[i])}
          children={_(sections[i++])}/>
      }
      <Button
        fullWidth
        variant={variant(sections[i])}
        children={_(sections[i++])}/>
      <Button
        fullWidth
        variant={variant(sections[i])}
        sx={{my:1}}
        children={_(sections[i++])}/>
      <Button
        fullWidth
        variant={variant(sections[i])}
        children={_(sections[i++])}/>
    </>
  );
};

export default MainMenu;
