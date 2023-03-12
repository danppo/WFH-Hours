import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import Report from '../sections/Report/Report';
import Welcome from '../sections/Welcome/Welcome';
import { ButtonGroup } from '@mui/material';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) => ({
  buttonContent: {
    fontSize: '1.3rem',
  },
  buttonBeaks: {
    fontSize: '1.1rem',
  },
}));

const Main = () => {
  const classes = useStyles();

  const timeCalc = (time) => {
    const hours = Math.floor(time);
    const minutes = (time - hours) * 60;
    console.log(hours + '.' + minutes);
  };
  timeCalc(7.5);

  const dayState = {
    NOTSTARTED: 'not started',
    STARTED: 'started',
    FINISHED: 'finished',
  };

  const data = JSON.parse(localStorage.getItem('WFHHOURS'));
  const thisWeek = dayjs().startOf('week').format('YYYYMMDD');

  if (data.hours[thisWeek]) {
    console.log('we have data');
  } else {
    const dailyHours = data.weeklyHours / 5;
    console.log(dailyHours);
    console.log('nothing here');
    console.log(dayjs().day());
    const newData = data;
    // TODO: auto generate array
    newData.hours[thisWeek] = {
      completed: 0,
      days: [
        {
          day: 0,
          dayName: 'Sunday',
          hoursDone: 0,
          hoursRemaining: 0,
        },
        {
          day: 1,
          dayName: 'Monday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
        },
        {
          day: 2,
          dayName: 'Tuesday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
        },
        {
          day: 3,
          dayName: 'Wednesday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
        },
        {
          day: 4,
          dayName: 'Thursday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
        },
        {
          day: 5,
          dayName: 'Friday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
        },
        {
          day: 6,
          dayName: 'Saturday',
          hoursDone: 0,
          hoursRemaining: 0,
        },
      ],
    };
    localStorage.setItem('WFHHOURS', JSON.stringify(newData));
  }

  const [dayStarted, setDayStarted] = useState(dayState.NOTSTARTED);
  const [dayPaused, setDayPaused] = useState(false);

  console.log(data.hours.days);
  return (
    <Box p={1}>
      <Welcome name={data.name} />
      {dayStarted === dayState.STARTED ? (
        <ButtonGroup fullWidth>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => setDayStarted(dayState.FINISHED)}
          >
            <Box m={1.4}>
              <Typography variant='button' className={classes.buttonContent}>
                End Day
              </Typography>
            </Box>
          </Button>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            onClick={() => setDayPaused(!dayPaused)}
          >
            <Box m={1.4}>
              <Typography variant='button' className={classes.buttonContent}>
                {dayPaused ? 'Return to work' : 'have a break'}
              </Typography>
            </Box>
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          variant='contained'
          fullWidth
          color='primary'
          size='large'
          onClick={() => setDayStarted(dayState.STARTED)}
        >
          <Box m={1.4}>
            <Typography variant='button' className={classes.buttonContent}>
              {dayStarted === dayState.NOTSTARTED ? 'Start your day' : 'Restart work'}
            </Typography>
          </Box>
        </Button>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' gutterBottom>
          Status: Working 3:25
        </Typography>
        <Typography variant='h6' gutterBottom>
          Weekly Target: {data.weeklyHours}
        </Typography>
      </Box>
      <Report details={data.hours[thisWeek].days} />
    </Box>
  );
};

export default Main;
