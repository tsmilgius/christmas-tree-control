import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './themes';
import LandingScreen from './components/LandingScreen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingScreen />
    </ThemeProvider>
  );
};

export default App;
