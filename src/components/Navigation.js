import {Grid, Button, Box} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default () => {
  return (
    <Box sx={{maxWidth:'500px', m:'auto', p:1}}>
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
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            children={<ArrowUpwardIcon/>}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            fullWidth
            size="large"
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    </Box>
  );
};