import { Avatar, Tooltip } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

interface UserAvatarProps {
  userName: string;
}

const UserAvatar = ({ userName }: UserAvatarProps) => {
  if (!userName) return null;

  return (
    <Tooltip title={userName}>
      <Avatar sx={{ bgcolor: deepPurple[500], width: 40, height: 40 }}>{userName[0]}</Avatar>
    </Tooltip>
  );
};

export default UserAvatar;
