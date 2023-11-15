import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { FieldErrors } from 'react-hook-form';
import { ITicketFieldValues } from '../../form/tickets/helper';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimeValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';
import { EmptyHelperText, HelperText, StyledDatePicker, StyledInputLabel } from './styled';

interface IProps {
  date: string | Date;
  onChange: (value: unknown, context: PickerChangeHandlerContext<DateTimeValidationError>) => void;
  errors: FieldErrors<ITicketFieldValues>;
}

export default function DatePicker({ date, onChange, errors }: IProps) {
  return (
    <>
      <StyledInputLabel data-testid='date_picker_heading'>Date</StyledInputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={['DatePicker']}>
          <StyledDatePicker
            data-testid='styled_date_picker'
            value={date === '' ? null : date}
            onChange={onChange}
            errors={errors}
            slotProps={{
              textField: {
                helperText: errors.deadlineDate ? (
                  <HelperText>Date is required</HelperText>
                ) : (
                  <EmptyHelperText>.</EmptyHelperText>
                ),
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </>
  );
}
