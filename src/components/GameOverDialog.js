import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle
} from '@mui/material';
import {useEffect} from 'react';

function GameOverDialog(){
  const {
    dstrg,
    strg,
    set,
    _
  } = window.web;
  const score = window.web.gameOverScore;
  useEffect(() => {
    if(strg('coordinates') && typeof score === 'number')
      dstrg('coordinates');
  });
  return (
    <Dialog
      open={typeof score === 'number'}
      fullWidth>
      <DialogTitle children={_('game_over')}/>
      <DialogContent children={_('score', {score})}/>
      <DialogActions>
        <Button
          variant="text"
          children={_('ok')}
          onClick={e => set('gameOverScore', undefined)}/>
      </DialogActions>
    </Dialog>
  );
}

export default GameOverDialog;
