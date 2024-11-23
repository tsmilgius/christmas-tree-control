import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./themes";
import ThemeToggler from "./components/ThemeToggler";
import LandingScreen from "./components/LandingScreen";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeToggler />

      <LandingScreen />
    </ThemeProvider>
  );
};

export default App;
