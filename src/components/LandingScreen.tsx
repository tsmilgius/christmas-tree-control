import { ChangeEvent, useState } from 'react';
import { useUserStore } from '../store/store';
import Logo from './Logo';
import NameModal from './NameModal';
import TopBar from './TopBar';
import PresetList from './PresetList';

const LandingScreen = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState('');
  const setUserName = useUserStore((state) => state.setUserName);
  const userName = useUserStore((state) => state.userName);

  const handleGo = () => {
    handleClose();
    setUserName(inputValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <TopBar userName={userName} />

      {!userName && <Logo onClick={handleOpen} />}

      <NameModal open={open} handleClose={handleClose} handleInputChange={handleInputChange} handleGo={handleGo} />

      {userName && <PresetList />}
    </>
  );
};

export default LandingScreen;
