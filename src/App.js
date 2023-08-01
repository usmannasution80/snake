import {Paper} from '@mui/material';
import {useEffect} from 'react';
import MyRoutes from './components/MyRoutes';
import Navigation from './components/Navigation';

export default () => {
  return (
    <>
      <Paper>
        <MyRoutes/>
      </Paper>
      <Navigation/>
    </>
  );
};
