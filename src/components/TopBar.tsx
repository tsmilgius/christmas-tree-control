import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggler from './ThemeToggler';
import UserAvatar from './UserAvatar';

interface TopBarProps {
  userName?: string;
}

const TopBar = ({ userName }: TopBarProps) => {
  const userNameAvatar = userName ? userName : '';
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Press the tree image to start
          </Typography>
          <UserAvatar userName={userNameAvatar} />

          <ThemeToggler />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
