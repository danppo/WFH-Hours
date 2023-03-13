import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import Report from '../sections/Report/Report';
import Welcome from '../sections/Welcome/Welcome';
import { ButtonGroup } from '@mui/material';
import dayjs from 'dayjs';

var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

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

  window.onstorage = () => {
    console.log('changes');
  }

  const dayState = {
    NOTSTARTED: 'not started',
    STARTED: 'started',
    PAUSED: 'paused',
    FINISHED: 'finished',
  };

  const data = JSON.parse(localStorage.getItem('WFHHOURS'));
  const thisWeek = dayjs().startOf('week').format('YYYYMMDD');
  const dayNo = dayjs().day();
  const [daysData, setDaysData] = useState(data.hours[thisWeek]);

  if (!daysData) {
    const dailyHours = (data.weeklyHours * 60) / 5;
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
          state: dayState.NOTSTARTED,
          time: 0,
        },
        {
          day: 1,
          dayName: 'Monday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
          state: dayState.NOTSTARTED,
          time: 0,
        },
        {
          day: 2,
          dayName: 'Tuesday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
          state: dayState.NOTSTARTED,
          time: 0,
        },
        {
          day: 3,
          dayName: 'Wednesday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
          state: dayState.NOTSTARTED,
          time: 0,
        },
        {
          day: 4,
          dayName: 'Thursday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
          state: dayState.NOTSTARTED,
          time: 0,
        },
        {
          day: 5,
          dayName: 'Friday',
          hoursDone: 0,
          hoursRemaining: dailyHours,
          state: dayState.NOTSTARTED,
          time: 0,
        },
        {
          day: 6,
          dayName: 'Saturday',
          hoursDone: 0,
          hoursRemaining: 0,
          state: dayState.NOTSTARTED,
          time: 0,
        },
      ],
    };
    localStorage.setItem('WFHHOURS', JSON.stringify(newData));
    console.log(newData);
    setDaysData(newData.hours[thisWeek]);
  }


  const today = () => (daysData ? daysData.days[dayNo] : -1);
  console.log(daysData);
  console.log(today());

  // const [dayStarted, setDayStarted] = useState(dayState.NOTSTARTED);
  const [dayPaused, setDayPaused] = useState(false);

  const handleStateChange = (type) => {
    const tempData = data;
    const now = dayjs();
    if (today().time === 0) {
      tempData.hours[thisWeek].days[dayNo].time = now;

    } else {
      const start = dayjs(today().time);
      // const now = dayjs();
      console.log(start.diff(now, 'minute'));
      console.log(now.diff(today().time, 'minute'));
      tempData.hours[thisWeek].days[dayNo].hoursDone = now.diff(today().time, 'minute');

      // console.log(dayjs.duration(today().time).diff(now));
    }
    console.log(today().time);
    console.log(type);
    console.log(dayState.STARTED);
    if (type === dayState.STARTED) {

      console.log(dayjs());
      tempData.hours[thisWeek].days[dayNo].time = now;
      tempData.hours[thisWeek].days[dayNo].state = type;
      localStorage.setItem('WFHHOURS', JSON.stringify(tempData));
      setDaysData(tempData.hours[thisWeek]);
    } else if (type === dayState.FINISHED) {
      tempData.hours[thisWeek].days[dayNo].time = now;
      tempData.hours[thisWeek].days[dayNo].state = type;
      localStorage.setItem('WFHHOURS', JSON.stringify(tempData));
      setDaysData(tempData.hours[thisWeek]);
    }

  }

  console.log(dayState.STARTED);
  console.log(today().state);
  console.log(today().state === dayState.STARTED);


  return (
    <Box p={1}>
      <Welcome name={data.name} />
      {today().state === dayState.STARTED ? (
        <ButtonGroup fullWidth>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => handleStateChange(dayState.FINISHED)}
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
                {today().state === dayState.PAUSED ? 'Return to work' : 'have a break'}
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
          onClick={() => handleStateChange(dayState.STARTED)}
        >
          <Box m={1.4}>
            <Typography variant='button' className={classes.buttonContent}>
              {today().state === dayState.NOTSTARTED ? 'Start your day' : 'Restart work'}
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
