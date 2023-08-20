import {
  Box,
  Button
} from '@mui/material';

function InteractionButtons(){
  const {_} = window.web;
  return (
    <Box sx={{textAlign:'center'}}>
      <Box sx={{pb:1}}>
        <Button
          onClick={e => window.web.selectOnClick(e)}
          children={_('select')}/>
      </Box>
      <Box>
        <Button
          onClick={e => window.web.mainMenuOnClick(e)}
          children={_('main_menu')}/>
      </Box>
    </Box>
  );
};

export default InteractionButtons;
