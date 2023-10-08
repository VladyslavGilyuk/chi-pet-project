import React from 'react';
import { StyledSelect } from './styled';
import { MenuItem, SelectChangeEvent } from '@mui/material';

export interface ISelectOptions {
  value: string;
  label: string;
}

interface ISelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: ISelectOptions[];
}

const CustomSelect: React.FC<ISelectProps> = ({ value, onChange, options }) => {
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
