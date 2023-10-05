import React from 'react';
import { StyledSelect } from './styled';
import { MenuItem, SelectChangeEvent } from '@mui/material';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: SelectOption[];
}

const CustomSelect: React.FC<SelectProps> = ({ value, onChange, options }) => {
  return (
    <StyledSelect value={value} onChange={(e) => onChange(e as SelectChangeEvent<string>)}>
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default CustomSelect;
