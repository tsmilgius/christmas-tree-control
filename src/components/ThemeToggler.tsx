import { useColorScheme } from '@mui/material/styles';
import { DarkModeTwoTone, LightModeTwoTone } from '@mui/icons-material';
import { ListItemIcon, MenuItem } from '@mui/material';

const ThemeToggler = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const toggleTheme = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <MenuItem onClick={toggleTheme}>
      <ListItemIcon>
        {mode === 'light' ? <DarkModeTwoTone fontSize="small" /> : <LightModeTwoTone fontSize="small" />}
      </ListItemIcon>
      Switch theme
    </MenuItem>
  );
};

export default ThemeToggler;
