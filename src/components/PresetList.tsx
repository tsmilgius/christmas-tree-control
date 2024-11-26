import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ParkIcon from '@mui/icons-material/Park';
import { green } from '@mui/material/colors';
import { messages } from '../types/messages';
import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import useWebSocket from 'react-use-websocket';
import { wss } from '../constants';
import { Box } from '@mui/material';

const PresetList = () => {
  const presets = Object.entries(messages);
  const { sendMessage } = useWebSocket(wss);

  const handleListItemClick = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    sendMessage(JSON.stringify(presets[index][1]));
  };

  return (
    <>
      <Box
        aria-label="logo"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <List dense={true} sx={{ pt: 20 }}>
          {presets.map((message, index) => (
            <ListItemButton onClick={(event) => handleListItemClick(event, index)} key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: green[700] }} variant="square">
                    <ParkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={message[0].charAt(0).toUpperCase() + message[0].slice(1)}
                  secondary={'Secondary text'}
                />
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
};

export default PresetList;
