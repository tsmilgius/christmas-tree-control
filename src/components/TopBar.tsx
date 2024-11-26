import { AppBar, Box, Toolbar, IconButton, MenuItem, Divider, ListItemIcon, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import ThemeToggler from './ThemeToggler';
import UserAvatar from './UserAvatar';
import { useState } from 'react';
import { Logout } from '@mui/icons-material';

interface TopBarProps {
  userName?: string;
}

const TopBar = ({ userName }: TopBarProps) => {
  const userNameAvatar = userName ? userName : '';
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenGithub = () => {
    window.open('https://github.com/tsmilgius/christmas-tree-control', '_blank');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            onClick={handleSettingsClick}
            aria-haspopup="true"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose}>
            <ThemeToggler />
            <Divider />
            <MenuItem onClick={handleOpenGithub}>
              <ListItemIcon>
                <GitHubIcon fontSize="small" />
              </ListItemIcon>
              Project GitHub
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Exit
            </MenuItem>
          </Menu>

          <UserAvatar userName={userNameAvatar} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
