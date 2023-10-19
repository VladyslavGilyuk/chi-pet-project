/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-imports */
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { EmptyHelperText, HelperText, StyledDatePicker, StyledInputLabel } from './styled';

interface IProps {
  date: any;
  onChange: any;
  errors?: any;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BasicDatePicker({ date, onChange, errors }: IProps) {
  // eslint-disable-next-line no-console
  console.log(errors);
  return (
    <>
      <StyledInputLabel>Date</StyledInputLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DemoContainer components={['DatePicker']}>
          <StyledDatePicker
            value={date}
            onChange={onChange}
            errors={errors}
            slotProps={{
              textField: {
                helperText: errors.date ? (
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
