import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import minutesToHours from '../../functions/minutesToHours';

const DailyMinutes = ({minutesDone, time}) => {

  const [minutesCompleted, setMinutesCompleted] = useState(minutesDone);
  
  const refreshClock = () => {
    const justWorked = time !== 0 ? dayjs().diff(time, 'minute') : minutesDone;
    const newWorkedTime = justWorked + minutesDone;
    setMinutesCompleted(newWorkedTime);
  }


  useEffect(() => {
    const timerId = setInterval(refreshClock, 30000);
    return () => {
      clearInterval(timerId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span>
      {minutesToHours(minutesCompleted)}
    </span>
  );
}
export default DailyMinutes;
