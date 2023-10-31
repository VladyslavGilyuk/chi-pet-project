import { DateTimePicker } from '@mui/x-date-pickers';
import { FieldErrors } from 'react-hook-form';
import { ITicketFieldValues } from '../helper';
import { InputLabel, styled } from '@mui/material';
import { colors, fonts } from '../../../../theme';

const StyledInputLabel = styled(InputLabel)`
  color: ${colors.primaryGray};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;
interface StyledTagProps {
  errors: FieldErrors<ITicketFieldValues>;
}

const StyledDatePicker = styled(DateTimePicker)<StyledTagProps>`
  width: 100%;

  & input {
    padding: 11px;
    color: ${colors.primaryBlack};
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weight.small};
  }
`;
const HelperText = styled('span')`
  color: #d32f2f;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
`;
const EmptyHelperText = styled('span')`
  visibility: hidden;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
`;
export { StyledInputLabel, StyledDatePicker, HelperText, EmptyHelperText };
