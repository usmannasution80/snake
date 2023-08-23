import {useState} from 'react';
import {Button} from '@mui/material';
import levels from 'levels.js';

function LevelSelection(){
  const {_, navigate, strg} = window.web;
  const max = levels.length;
  const [active, setActive] = useState(0);
  window.web.navigationOnClick = (e, direction) => {
    switch(direction){
      case 'up':
        setActive(active > 0 ? active-1 : max-1);
        break;
      case 'down':
        setActive(active < max-1 ? active+1 : 0);
    }
  };
  window.web.selectOnClick = e => {
    strg('level', active);
    navigate('/game');
  };
  return (
    <>
      {(() => {
        const levelButtons = [];
        for(let i=0;i<max;i++) levelButtons.push(
          <Button
            fullWidth
            sx={{mb:1}}
            variant={i === active ? 'contained' : 'outlined'}
            children={_('level', {level:i+1})}/>
        );
        return levelButtons;
      })()}
    </>
  );
}

export default LevelSelection;