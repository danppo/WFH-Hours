import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import makeStyles from '@mui/styles/makeStyles';
import Report from '../sections/Report/Report';
import Welcome from '../sections/Welcome/Welcome';
import { TextField, Stack, Button } from '@mui/material';
import { useState } from 'react';

const Setup = ({setShowMain}) => {

  const [name, setName] = useState("");
  const [hours, setHours] = useState("");

  const handleSubmit = () => {
    console.log("entered");
  }

  console.log(hours);


  return (
    <Box p={1} >
      <Typography variant="h6" gutterBottom>
        Some basics to start enter you name (optional) and your hours per week
      </Typography>
      <Stack spacing={1}>
      <TextField value={name} onChange={(e) => setName(e.target.value)} id="name" label="Name" mb={2}/>
      <TextField value={hours} onChange={(e) => setHours(e.target.value)} type="number" id="filled-basic" label="Weekly Hours"  />
      <Button variant="contained"  color='primary' size='large' onClick={() => handleSubmit} >
            <Box m={1.4}>
              <Typography variant="button"  >
                End Day
              </Typography>
            </Box>
          </Button>
      </Stack>
      <Welcome name='Daniel' />

      <Typography variant="h6" gutterBottom>
        Status: Working 3:25
      </Typography>
      <Report />
    </Box>
  );
}

export default Setup;
