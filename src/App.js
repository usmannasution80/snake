import {Paper, Grid} from '@mui/material';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MyRoutes from 'components/MyRoutes';
import Navigation from 'components/Navigation';
import InteractionButtons from 'components/InteractionButtons';

export default () => {

  const [render, setRender] = useState(1);
  const navigate = useNavigate();
  window.web.render = () => setRender(render * -1);
  window.web.navigate = path => navigate(path);

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
    </>
  );
};
