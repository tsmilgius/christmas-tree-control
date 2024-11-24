import { Box, Button, Modal, TextField } from "@mui/material";
import christmasTree from "../assets/park.svg";
import { ChangeEvent, useState } from "react";
import { useUserStore } from "../store/store";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
};

const LandingScreen = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");
  const setUserName = useUserStore((state) => state.setUserName);

  const handleGo = () => {
    handleClose();
    setUserName(inputValue);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        onClick={() => handleOpen()}
      >
        <img
          src={christmasTree}
          alt="Christmas Tree"
          style={{
            width: "150px",
            height: "150px",
            willChange: "filter",
            transition: "filter 0.5s",
            filter: "drop-shadow(5px 5px 30px #03e9f4)",
          }}
        />
      </Box>
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
              if (e.key === "Enter") handleGo();
            }}
          />
          <Button
            variant="contained"
            color="success"
            sx={{ ml: 1, mr: 0, pt: 2, pb: 2 }}
            onClick={handleGo}
          >
            Go
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default LandingScreen;
