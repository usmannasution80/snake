import {Grid, Button, Box} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default () => {
  return (
    <Box sx={{maxWidth:'200px', m:'auto', p:1}}>
      <Grid container alignItems="center">
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            onClick={e => console.log(e.target)}
            fullWidth
            size="large"
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      <Grid container sx={{my:1}}>
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            children={<ArrowBackIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            children={<ArrowForwardIcon/>}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            children={<ArrowDownwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    </Box>
  );
};