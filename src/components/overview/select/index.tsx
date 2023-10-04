import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { [key: string]: string };
}

const CustomSelect: React.FC<SelectProps> = ({ value, onChange, options }) => {
  return (
    <Select value={value} onChange={onChange} size='small'>
      {Object.entries(options).map(([value, label]) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
