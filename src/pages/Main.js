import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import Report from '../sections/Report/Report';
import Welcome from '../sections/Welcome/Welcome';
import { ButtonGroup } from '@mui/material';
import dayjs from 'dayjs';
import generateNewWeek from "../functions/generateNewWeek"
import DailyMinutes from '../components/DailyMinutes/DailyMinutes';

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

export const dayState = {
  NOTSTARTED: 'not started',
  STARTED: 'started',
  PAUSED: 'paused',
  FINISHED: 'finished',
};

const Main = () => {
  const classes = useStyles();


  const [data, setData] = useState(JSON.parse(localStorage.getItem('WFHHOURS')));
  const thisWeek = dayjs().startOf('week').format('YYYYMMDD');
  const dayNo = dayjs().day();
  
  const today = () => (data.hours[thisWeek] ? data.hours[thisWeek].days[dayNo] : -1);
  const [currentState, setCurrentState] = useState(dayState.NOTSTARTED);

  if (!data.hours[thisWeek]) {
    const newData = data;
    newData.hours[thisWeek] = generateNewWeek(data.weeklyHours);
    
    localStorage.setItem('WFHHOURS', JSON.stringify(newData));
    setData(newData);
    // setCurrentState(dayState.NOTSTARTED);
  }

  useEffect(()=> {
    setCurrentState(today().state)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])
  

  const handleStateChange = (type) => {
    const tempData = data;
    const now = dayjs();

    if (today().time === 0) {
      tempData.hours[thisWeek].days[dayNo].time = now;
    } else {
      const justWorked = now.diff(today().time, 'minute');
      const alreadyWorkedTime = today().hoursDone;
      const newMinutesWorked = justWorked + alreadyWorkedTime;
      tempData.hours[thisWeek].days[dayNo].hoursDone = newMinutesWorked;
      // tempData.hours[thisWeek].days[dayNo].hoursRemaining = today().hoursRemaining - newMinutesWorked;
    }

    if (type === dayState.STARTED) {
      tempData.hours[thisWeek].days[dayNo].time = now;
    } else {
      tempData.hours[thisWeek].days[dayNo].time = 0;
    }

    tempData.hours[thisWeek].days[dayNo].state = type;
    localStorage.setItem('WFHHOURS', JSON.stringify(tempData));
    setData(tempData);
    setCurrentState(type);
  }


  return (
    <Box p={1}>
      <Welcome name={data.name} />
      {data.hours[thisWeek] && 
      <>
      {currentState === dayState.STARTED || currentState === dayState.PAUSED ? (
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
            onClick={() => handleStateChange(currentState === dayState.PAUSED ? dayState.STARTED : dayState.PAUSED)}
          >
            <Box m={1.4}>
              <Typography variant='button' className={classes.buttonContent}>
                {currentState === dayState.PAUSED ? 'Return to work' : 'Have a break'}
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
              {currentState === dayState.NOTSTARTED ? 'Start your day' : 'Restart work'}
            </Typography>
          </Box>
        </Button>
      )}
      </>
      }
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6' gutterBottom>
          Status: {today().time === 0 ? "Not Working " : "Working " }
          <DailyMinutes minutesDone={today().hoursDone} time={today().time}/>
        </Typography>
        <Typography variant='h6' gutterBottom>
          Weekly Target: {data.weeklyHours}
        </Typography>
      </Box>
      <Report details={data.hours[thisWeek].days} dayNo={dayNo} />
    </Box>
  );
};

export default Main;
