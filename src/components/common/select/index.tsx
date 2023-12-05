import { FieldErrors } from 'react-hook-form';
import { ITicketFieldValues } from '../../forms/tickets/helper';
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
  errors?: FieldErrors<ITicketFieldValues>;
  label?: string;
  placeholder?: string;
  width?: string;
  padding?: string;
}

const CustomSelect: React.FC<IProps> = ({
  value,
  onChange,
  options,
  errors,
  label,
  placeholder,
  width,
  padding,
}) => {
  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect
        data-testid='custom-select'
        width={width}
        padding={padding}
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
          <StyledMenuItem key={value} value={value} data-testid={`item_${value}`}>
            {label}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </>
  );
};

export default CustomSelect;
