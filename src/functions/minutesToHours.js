const minutesToHours = (time) => {
  const decimalHours = time / 60
  const hours = Math.floor(decimalHours);
  const minutes = (decimalHours - hours) * 60;
  return hours + '.' + minutes;
};

export default minutesToHours;
