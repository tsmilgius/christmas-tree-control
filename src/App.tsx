import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./themes";
import ThemeToggler from "./components/ThemeToggler";
import LandingScreen from "./components/LandingScreen";
import UserAvatar from "./components/UserAvatar";
import { useUserStore } from "./store/store";
import PresetList from "./components/PresetList";

const App = () => {
  const userName = useUserStore((state) => state.userName);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserAvatar userName={userName} />
      <ThemeToggler />

      {!userName ? <LandingScreen /> : <PresetList />}
    </ThemeProvider>
  );
};

export default App;
