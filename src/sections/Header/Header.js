import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color='secondary' position="static">
    <Toolbar className={classes.toolbar}>
      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <Typography align="center" variant="h4" >
        WHF Hours
      </Typography>

      {/* <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
  );
}

export default Header;
