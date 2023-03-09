import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import Time from '../../components/Time/Time';

const useStyles = makeStyles((theme) => ({
  buttonContent: {
    fontSize: '1.3rem'
  }
}));

const Welcome = ({
  name
}) => {
  // console.log(theme);
  const classes = useStyles();



  return (
    <Grid container p={1} direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} >
      <Typography variant="body1">
        Good Morning {name}
      </Typography>
      <Typography variant="body1">
        <Time />
      </Typography>
    </Grid>
  );
}

export default Welcome;
