import {Grid, Button, Box} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Navigation(){

  return (
    <Box sx={{maxWidth:'200px', m:'auto'}}>
      <Grid container alignItems="center">
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            onClick={e => window.web.navigationOnClick(e, 'up')}
            size="large"
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      <Grid container sx={{my:1}}>
        <Grid item xs={4}>
          <Button
            onClick={e => window.web.navigationOnClick(e, 'left')}
            size="large"
            children={<ArrowBackIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            onClick={e => window.web.navigationOnClick(e, 'right')}
            size="large"
            children={<ArrowForwardIcon/>}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            onClick={e => window.web.navigationOnClick(e, 'down')}
            size="large"
            children={<ArrowDownwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    </Box>
  );
};

export default Navigation;