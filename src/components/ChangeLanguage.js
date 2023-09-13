import {Box} from '@mui/material';

function ChangeLanguage(){
  const {_} = window.web;
  return (
    <>
      <Box
        component="h3"
        sx={{textAlign:'center'}}
        children={_('change_language')}/>
    </>
  );
}

export default ChangeLanguage;