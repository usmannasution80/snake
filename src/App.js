import {Paper, Grid} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MyRoutes from 'components/MyRoutes';
import Navigation from 'components/Navigation';
import InteractionButtons from 'components/InteractionButtons';
import GameOverDialog from 'components/GameOverDialog';
import web from 'web';

export default () => {

  if(!window.web)
    window.web = web;

  const [render, setRender] = useState(1);
  const navigate = useNavigate();
  window.web.render = () => setRender(render * -1);
  window.web.navigate = path => navigate(path);
  window.onstorage = e => web.render();

  return (
    <>
      <Paper>
        <MyRoutes/>
      </Paper>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={1}
        sx={{p:1}}>
        <Grid item xs>
          <Navigation/>
        </Grid>
        <Grid item>
          <InteractionButtons/>
        </Grid>
      </Grid>
      <GameOverDialog/>
    </>
  );
};
