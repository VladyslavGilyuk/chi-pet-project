/* eslint-disable sort-imports */
import { InputLabel, styled } from '@mui/material';
import { colors, fonts } from '../../../../theme';
import { DatePicker } from '@mui/x-date-pickers';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}
const StyledDatePicker = styled(DatePicker)<StyledTagProps>`
  width: 100%;
  & input {
    padding: 11px;
    color: ${colors.primaryBlack};
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weight.small};
  }

  & .MuiOutlinedInput-notchedOutline {
    box-sizing: border-box;
    ${({ errors }) => errors && errors.date && `border: 1px solid #d32f2f;`};
  }

  &:hover,
  &:focus {
    & .MuiOutlinedInput-notchedOutline {
      ${({ errors }) => errors && errors.date && `border: 1px solid #d32f2f;`}
    }
  }
  &:focus-within {
    & .MuiOutlinedInput-notchedOutline {
      ${({ errors }) => errors && errors.date && `border: 2px solid #d32f2f;`}
    }
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
