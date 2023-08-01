import {useState} from 'react';
import {Button, Box} from '@mui/material';

export default () => {

  const {
    _
  } = window.web;

  const [active, setActive] = useState('new_game');

  return (
    <>
      <Box
        sx={{p:0, m:0, my:1, textAlign:'center'}}
        component="h3"
        children={_('main_menu')}/>
      <Button
        fullWidth
        children={_('new_game')}/>
      <Button
        fullWidth
        sx={{my:1}}
        children={_('highscores')}/>
      <Button
        fullWidth
        children={_('options')}/>
    </>
  );
};