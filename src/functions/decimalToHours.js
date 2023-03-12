const decimalToHours = (time) => {
  const hours = Math.floor(time);
  const minutes = (time - hours) * 60;
  return hours + '.' + minutes;
};

export default decimalToHours;
