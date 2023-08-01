import {Grid, Button} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default () => {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            onClick={e => console.log(e.target)}
            fullWidth
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
          <Button
            fullWidth
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            fullWidth
            children={<ArrowUpwardIcon/>}/>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}/>
        <Grid item xs={4}>
          <Button
            fullWidth
            children={<ArrowUpwardIcon/>}/>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
    </>
  );
};