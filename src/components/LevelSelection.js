import {Button} from '@mui/material';
import levels from 'levels.js';

function LevelSelection(){
  const {_} = window.web;
  return (
    <>
      {(() => {
        const levelButtons = [];
        const max = levels.length;
        for(let i=1;i<=max;i++) levelButtons.push(
          <Button
            fullWidth
            children={_('level', {level:i})}/>
        );
        return levelButtons;
      })()}
    </>
  );
}

export default LevelSelection;