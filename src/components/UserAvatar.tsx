import { Avatar, Box } from "@mui/material";
import { User } from "../types/types";
import { deepPurple } from "@mui/material/colors";

const UserAvatar = (user: User) => {
  if (!user.userName) return null;

  return (
    <Box sx={{ position: "absolute", top: 0, right: 40, padding: 3 }}>
      <Avatar sx={{ bgcolor: deepPurple[200] }}>{user.userName[0]}</Avatar>
    </Box>
  );
};

export default UserAvatar;
