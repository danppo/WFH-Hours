import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
