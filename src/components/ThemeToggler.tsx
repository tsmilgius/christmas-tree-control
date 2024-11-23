import { useColorScheme } from "@mui/material/styles";
import { DarkModeTwoTone, LightModeTwoTone } from "@mui/icons-material";
import { Box, IconButton, Tooltip } from "@mui/material";

const ThemeToggler = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Box sx={{ position: "absolute", top: 0, right: 0, padding: 2 }}>
      <Tooltip title="Toggle theme">
        <IconButton
          size="large"
          onClick={toggleTheme}
          aria-label="toggle theme"
        >
          {mode === "light" ? <DarkModeTwoTone /> : <LightModeTwoTone />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ThemeToggler;
