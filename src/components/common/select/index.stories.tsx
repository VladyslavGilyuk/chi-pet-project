/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from '@mui/material';
import CustomSelect from './index';
import { Meta } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'CustomSelect',
  component: CustomSelect,
  decorators: [
    (Story) => (
      <Box style={{ width: '150px' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CustomSelect>;

export default meta;

export const Default: any = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <CustomSelect {...args} value={value} onChange={(event) => setValue(event.target.value)} />
  );
};

Default.args = {
  label: 'Label',
  placeholder: 'Select an option',
  options: [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ],
};

export const WithError: any = (args: any) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<any>({ tag: 'Required' });
  return (
    <CustomSelect
      {...args}
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
        setError(null);
      }}
      errors={error}
    />
  );
};

WithError.args = {
  label: 'Label',
  placeholder: 'Select an option',
  options: [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ],
};
