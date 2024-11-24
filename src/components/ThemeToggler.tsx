import { useColorScheme } from '@mui/material/styles';
import { DarkModeTwoTone, LightModeTwoTone } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const ThemeToggler = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Tooltip title="Toggle theme">
      <IconButton size="large" onClick={toggleTheme} aria-label="toggle theme">
        {mode === 'light' ? <DarkModeTwoTone /> : <LightModeTwoTone />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggler;
