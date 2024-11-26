import { Box } from '@mui/material';
import christmasTree from '../assets/park.svg';

interface LogoProps {
  onClick: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <>
      <Box
        aria-label="logo"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75vh',
        }}
      >
        <img
          src={christmasTree}
          alt="Christmas Tree"
          style={{
            width: '180px',
            height: '180px',
            willChange: 'filter',
            filter: 'drop-shadow(5px 5px 30px #03e9f4)',
            cursor: 'pointer',
          }}
          onClick={onClick}
        />
      </Box>
    </>
  );
};

export default Logo;
