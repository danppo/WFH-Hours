import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';

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
  const [buttonContent, setButtonContent] = React.useState('Start Working Now');

  const time = dayjs().format('dddd D MMM YYYY, H:mm');

  return (
    <Grid container p={1} direction={'row'} alignItems={'center'} justify={'space-evenly'} >
      <Typography variant="body1">
        Good Morning {name}
      </Typography>
      <Typography variant="body2">
        {time}
      </Typography>
    </Grid>
  );
}

export default Welcome;
