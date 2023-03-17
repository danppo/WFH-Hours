import { dayState } from "../pages/Main";

const generateNewWeek = (weeklyHours) => {
  const dailyMinutes = (weeklyHours * 60) / 5;
  return {
    completed: 0,
    days: [
      {
        day: 0,
        dayName: 'Sunday',
        hoursDone: 0,
        dailyMinutes: 0,
        state: dayState.NOTSTARTED,
        time: 0,
      },
      {
        day: 1,
        dayName: 'Monday',
        hoursDone: 0,
        dailyMinutes: dailyMinutes,
        state: dayState.NOTSTARTED,
        time: 0,
      },
      {
        day: 2,
        dayName: 'Tuesday',
        hoursDone: 0,
        dailyMinutes: dailyMinutes,
        state: dayState.NOTSTARTED,
        time: 0,
      },
      {
        day: 3,
        dayName: 'Wednesday',
        hoursDone: 0,
        dailyMinutes: dailyMinutes,
        state: dayState.NOTSTARTED,
        time: 0,
      },
      {
        day: 4,
        dayName: 'Thursday',
        hoursDone: 0,
        dailyMinutes: dailyMinutes,
        state: dayState.NOTSTARTED,
        time: 0,
      },
      {
        day: 5,
        dayName: 'Friday',
        hoursDone: 0,
        dailyMinutes: dailyMinutes,
        state: dayState.NOTSTARTED,
        time: 0,
      },
      {
        day: 6,
        dayName: 'Saturday',
        hoursDone: 0,
        dailyMinutes: 0,
        state: dayState.NOTSTARTED,
        time: 0,
      },
    ],
  };;
};

export default generateNewWeek;
