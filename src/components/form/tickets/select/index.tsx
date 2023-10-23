import { FieldErrors } from 'react-hook-form';
import { ITicketFieldValues } from '../helper';
import { SelectChangeEvent } from '@mui/material';
import { StyledInputLabel, StyledMenuItem, StyledPlaceholder, StyledSelect } from './styled';

export interface ISelectOptions {
  value: string;
  label: string;
}
interface IProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: ISelectOptions[];
  errors: FieldErrors<ITicketFieldValues>;
}

const CustomSelect: React.FC<IProps> = ({ value, onChange, options, errors }) => {
  return (
    <>
      <StyledInputLabel>Priority</StyledInputLabel>
      <StyledSelect
        value={value || ''}
        onChange={(e) => onChange(e as SelectChangeEvent<string>)}
        error={!!errors.tag}
        displayEmpty
        renderValue={(selected) => {
          if (selected === '' || selected === undefined) {
            return <StyledPlaceholder>Name</StyledPlaceholder>;
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
