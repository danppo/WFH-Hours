import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Stack, Button } from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';

const Setup = ({ setShowMain }) => {
  const [name, setName] = useState('');
  const [weeklyHours, setWeeklyHours] = useState('');

  const handleSubmit = () => {
    console.log('entered');
    console.log(dayjs().day());
    console.log(dayjs().startOf('week').format('YYYYMMDD'));
    const dataStorage = {
      name,
      weeklyHours,
      hours: {},
    };
    localStorage.setItem('WFHHOURS', JSON.stringify(dataStorage));
    setShowMain(true);
  };

  console.log(weeklyHours);

  return (
    <Box p={1}>
      <Typography variant='h6' gutterBottom>
        Some basics to start enter you name (optional) and your hours per week
      </Typography>
      <Stack spacing={1}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          label='Name'
          mb={2}
        />
        <TextField
          value={weeklyHours}
          onChange={(e) => setWeeklyHours(e.target.value)}
          type='number'
          id='hours'
          label='Weekly Hours'
        />
        <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>
          <Box m={1.4}>
            <Typography variant='button'>Ok</Typography>
          </Box>
        </Button>
      </Stack>
    </Box>
  );
};

export default Setup;
