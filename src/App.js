import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import palette from './theme/theme';
import Container from '@material-ui/core/Container';
import Header from './sections/Header/Header';
import Main from './pages/Main';
import Paper from '@material-ui/core/Paper';

function App() {

  const theme = createMuiTheme(palette);

  return (
    <ThemeProvider theme={theme}>
      <Container  component="main" maxWidth="sm">
      <Paper>
        <Header />
        <Main />
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
          </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;

// TODO: Create Base layout
// TODO: User Standard cal/time picker
// TODO: Show current Day progress
// TODO: Table for week inputs
// TODO: calculate week totals
// TODO: use localstorage
// TODO: add popup for localstorage cookie Law
// TODO: About Page
// TODO: About Page Content
// TODO: Time Picker 5 minutes jumps
// TODO: scroll Day Picker
// TODO: hook in user selectable database
