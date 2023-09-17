import {useState} from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import {labels} from 'locales/locales';

function ChangeLanguage(){
  const {_, strg} = window.web;
  const keys = Object.keys(labels);
  const [active, setActive] = useState(0);
  window.web.navigationOnClick = (e, direction) => {
    switch(direction){
      case 'up':
        setActive(active <= 0 ? keys.length - 1 : active - 1);
        break;
      case 'down':
        setActive(active >= keys.length - 1 ? 0 : active + 1);
        break;
      default:
        return;
    }
  };
  window.web.selectOnClick = e => strg('lang', keys[active]);
  return (
    <>
      <Box
        component="h3"
        sx={{textAlign:'center'}}
        children={_('change_language')}/>
      <List>
        {
          keys.map(
            key => (
              <ListItem
                selected={key === keys[active]}
                key={key}>
                <ListItemText>
                  {labels[key]}
                </ListItemText>
              </ListItem>
            )
          )
        }
      </List>
    </>
  );
}

export default ChangeLanguage;