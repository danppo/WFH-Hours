import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import Report from '../sections/Report/Report';
import Welcome from '../sections/Welcome/Welcome';
import { ButtonGroup } from '@mui/material';

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

  const dayState = {
    NOTSTARTED: "not started",
    STARTED: "started",
    FINISHED: "finished"
  }

  const [dayStarted, setDayStarted] = useState(dayState.NOTSTARTED);
  const [dayPaused, setDayPaused] = useState(false);

  return (
    <Box p={1} >
      <Welcome name='Daniel' />
      {dayStarted === dayState.STARTED ?
        <ButtonGroup fullWidth >
          <Button variant="contained"  color='primary' size='large' onClick={() => setDayStarted(dayState.FINISHED)} >
            <Box m={1.4}>
              <Typography variant="button"  className={classes.buttonContent}>
                End Day
              </Typography>
            </Box>
          </Button>
          <Button variant="contained"  color='secondary' size='large' onClick={() => setDayPaused(!dayPaused)}>
            <Box m={1.4}>
              <Typography variant="button"  className={classes.buttonContent}>
                {dayPaused ? "Return to work" : "have a break"}
              </Typography>
            </Box>
          </Button>
        </ButtonGroup>
      :
        <Button variant="contained" fullWidth color='primary' size='large' onClick={() => setDayStarted(dayState.STARTED)} >
          <Box m={1.4}>
            <Typography variant="button"  className={classes.buttonContent}>
              {dayStarted === dayState.NOTSTARTED ? "Start your day" : "Restart work"}
            </Typography>
          </Box>
        </Button>
      }
      <Typography variant="h6" gutterBottom>
        Status: Working 3:25
      </Typography>
      <Report />
    </Box>
  );
}

export default Main;
