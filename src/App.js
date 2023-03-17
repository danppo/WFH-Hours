import './App.css';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import palette from './theme/theme';
import Container from '@mui/material/Container';
import Header from './sections/Header/Header';
import Main from './pages/Main';
import Setup from './pages/Setup';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

function App() {
  const theme = createTheme(palette);

  const hasData = localStorage.getItem('WFHHOURS');

  const [showMain, setMainSetup] = useState(!!hasData);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='sm'>
          <Paper>
            <Header />
            {showMain && <Main />}
            {!showMain && <Setup setShowMain={setMainSetup} />}
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
    </StyledEngineProvider>
  );
}

export default App;

// TODO: User Standard cal/time picker
// TODO: add popup for localstorage cookie Law
// TODO: About Page
// TODO: About Page Content
// TODO: Time Picker 5 minutes jumps
// TODO: scroll Day Picker
// TODO: hook in user selectable database
