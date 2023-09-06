import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  DialogTitle
} from '@mui/material';

function GameOverDialog(){
  const {
    strg,
    set,
    _
  } = window.web;
  const score = (() => {
    let highscores = strg('highscores');
    if(!highscores)
      return 0;
    highscores = JSON.parse(highscores);
    let time = 0;
    let score = 0;
    for(let score_ of highscores){
      if(score_.date > time){
        time = score_.date;
        score = score_.score;
      }
    }
    return score;
  });
  return (
    <Dialog
      open={!!window.web.isGameOver}
      fullWidth>
      <DialogTitle children={_('game_over')}/>
      <DialogContent children={_('score', {score})}/>
      <DialogActions>
        <Button
          variant="text"
          children={_('ok')}
          onClick={e => set('isGameOver', false)}/>
      </DialogActions>
    </Dialog>
  );
}

export default GameOverDialog;
