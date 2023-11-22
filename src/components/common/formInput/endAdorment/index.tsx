import React from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface EndAdornmentProps {
  show?: boolean;
  handleClick?: () => void;
}

const EndAdornment: React.FC<EndAdornmentProps> = ({ show, handleClick }) => {
  return (
    <InputAdornment data-testid='adornment_input' position='end'>
      <IconButton
        data-testid='adornment_button'
        aria-label='toggle visibility'
        onClick={handleClick}
        edge='end'
      >
        {show ? (
          <VisibilityOff data-testid='adornment_visibility_off' />
        ) : (
          <Visibility data-testid='adornment_visibility' />
        )}
      </IconButton>
    </InputAdornment>
  );
};

export default EndAdornment;
