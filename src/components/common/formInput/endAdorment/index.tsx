import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface EndAdornmentProps {
  show?: boolean;
  handleClick?: () => void;
}

const EndAdornment: React.FC<EndAdornmentProps> = ({ show, handleClick }) => {
  return (
    <InputAdornment position='end'>
      <IconButton aria-label='toggle visibility' onClick={handleClick} edge='end'>
        {show ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};

export default EndAdornment;
