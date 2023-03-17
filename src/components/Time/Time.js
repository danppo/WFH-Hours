import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Time = () => {

  const getTime = () => dayjs().format('dddd D MMM YYYY, H:mm');

  const [dateTime, setDateTime] = useState(getTime());

  const refreshClock = () => {
    setDateTime(getTime());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 15000);
    return () => {
      clearInterval(timerId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span>
      {dateTime}
    </span>
  );
}
export default Time;
