import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface EndAdornmentProps {
  adornmentProps?: {
    position?: 'end' | 'start';
    show?: boolean;
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  };
}

const EndAdornment: React.FC<EndAdornmentProps> = ({ adornmentProps }) => {
  const { position, show, handleClick, handleMouseDown } = adornmentProps || {};

  if (position && show !== undefined && handleClick && handleMouseDown) {
    return (
      <InputAdornment position={position}>
        <IconButton
          aria-label='toggle visibility'
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          edge='end'
        >
          {show ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    );
  }

  return null;
};

export default EndAdornment;
