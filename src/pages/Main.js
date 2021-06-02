import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Report from '../sections/Report/Report';
import Welcome from '../sections/Welcome/Welcome';

const useStyles = makeStyles((theme) => ({
  buttonContent: {
    fontSize: '1.3rem'
  },
  buttonBeaks: {
    fontSize: '1.1rem'
  }
}));

const Main = () => {
  const classes = useStyles();
  const [buttonContent, setButtonContent] = React.useState('Start Working Now');
  const [buttonBreak, setButtonBreak] = React.useState('Start screen rest');
  const [buttonLunch, setButtonLunch] = React.useState('Start break');

  return (
    <Box p={1} >
      <Welcome name='Daniel' />
      <Button variant="contained" fullWidth color='primary' size='large' >
        <Box m={1.4}>
          <Typography variant="button" color='accent' className={classes.buttonContent}>
            {buttonContent}
          </Typography>
        </Box>
      </Button>
      <Typography variant="h6" gutterBottom>
        Status: Working 3:25
      </Typography>
      <Grid container p={1} direction={'row'} alignItems={'center'} justify={'space-evenly'} >
        <Button variant="contained"  color='secondary' size='large' >
          <Box m={1.4}>
            <Typography variant="button" className={classes.buttonBeaks}>
              {buttonBreak}
            </Typography>
          </Box>
        </Button>
        <Button variant="contained"  color='primary' size='large' >
          <Box m={1.4}>
            <Typography variant="button" className={classes.buttonBeaks}>
              {buttonLunch}
            </Typography>
          </Box>
        </Button>
      </Grid>
      <Report />
    </Box>
  );
}

export default Main;
