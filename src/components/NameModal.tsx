import { Box, Button, Modal, TextField } from '@mui/material';

interface NameModalProps {
  open: boolean;
  handleClose: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleGo: () => void;
}

const NameModal = ({ open, handleClose, handleInputChange, handleGo }: NameModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <TextField
          label="Enter your name"
          variant="outlined"
          color="success"
          focused
          onChange={(e) => {
            handleInputChange(e);
          }}
          onKeyUp={(e) => {
            if (e.key === 'Enter') handleGo();
          }}
        />
        <Button variant="contained" color="success" sx={{ ml: 1, mr: 0, pt: 2, pb: 2 }} onClick={handleGo}>
          Go
        </Button>
      </Box>
    </Modal>
  );
};

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 420,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
};

export default NameModal;
