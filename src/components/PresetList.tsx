import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import ParkIcon from "@mui/icons-material/Park";
import { green } from "@mui/material/colors";
import { messages } from "../types/messages";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import useWebSocket from "react-use-websocket";
import { wss } from "../constants";

const PresetList = () => {
  const presets = Object.entries(messages);
  const { sendMessage } = useWebSocket(wss);

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    sendMessage(JSON.stringify(presets[index][1]));
  };

  return (
    <>
      <Typography
        sx={{ mt: 4, mb: 2 }}
        variant="h6"
        component="div"
      >
        Select tree color from the list
      </Typography>

      <List
        component={"nav"}
        dense={true}
        sx={{ width: "100%", maxWidth: 500 }}
      >
        {presets.map((message, index) => (
          <ListItemButton
            onClick={(event) => handleListItemClick(event, index)}
            key={index}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: green[900] }}
                  variant="square"
                >
                  <ParkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  message[0].charAt(0).toUpperCase() + message[0].slice(1)
                }
                secondary={"Secondary text"}
              />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default PresetList;
