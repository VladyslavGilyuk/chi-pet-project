/* eslint-disable sort-imports */
import { FieldErrors } from 'react-hook-form';
import { SelectChangeEvent } from '@mui/material';
import { ITicketFieldValues } from '../../form/tickets/helper';
import {
  StyledInputLabel,
  StyledMenuItem,
  StyledPlaceholder,
  StyledTasksSelect,
  StyledTicketsSelect,
} from './styled';

export interface ISelectOptions {
  value: string;
  label: string;
}
interface IProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: ISelectOptions[];
  errors?: FieldErrors<ITicketFieldValues>;
  label?: string;
  placeholder?: string;
  padding?: string;
  taskSelect?: boolean;
}

const CustomSelect: React.FC<IProps> = ({
  value,
  onChange,
  options,
  errors,
  label,
  placeholder,
  taskSelect,
}) => {
  const StyledSelect = taskSelect ? StyledTasksSelect : StyledTicketsSelect;
  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect
        value={value || ''}
        onChange={(e) => onChange(e as SelectChangeEvent<string>)}
        error={!!errors?.tag}
        displayEmpty
        renderValue={(selected) => {
          if (selected === '' || selected === undefined) {
            return <StyledPlaceholder>{placeholder}</StyledPlaceholder>;
          }
          return selected as string;
        }}
      >
        {options.map(({ value, label }) => (
          <StyledMenuItem key={value} value={value}>
            {label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

export default CustomSelect;
/*

import React from 'react';
import { StyledSelect } from './styled';
import { MenuItem, SelectChangeEvent } from '@mui/material';
export interface ISelectOptions {
  value: string;
  label: string;
}
interface IProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: ISelectOptions[];
}

const CustomSelect: React.FC<IProps> = ({ value, onChange, options }) => {
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
*/
