const minutesToHours = (time) => {
  const decimalHours = time / 60
  const hours = Math.floor(decimalHours);
  const minutes = time - (hours * 60);
  const padMinutes = minutes < 10 ? '0' + minutes : minutes;
 
  return hours + '.' + padMinutes;
};

export default minutesToHours;
