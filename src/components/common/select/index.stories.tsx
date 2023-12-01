/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomSelect from './index';
import { Meta } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'CustomSelect',
  component: CustomSelect,
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

export const Short: any = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <CustomSelect
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      width='80px'
    />
  );
};

Short.args = {
  label: 'Label',
  placeholder: 'Small',
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
  placeholder: 'Select',
  options: [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ],
};

export const ManyOptions: any = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <CustomSelect {...args} value={value} onChange={(event) => setValue(event.target.value)} />
  );
};

ManyOptions.args = {
  label: 'Label',
  placeholder: 'Select',
  options: [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5' },
    { value: 'Option 6', label: 'Option 6' },
    { value: 'Option 7', label: 'Option 7' },
    { value: 'Option 8', label: 'Option 8' },
    { value: 'Option 9', label: 'Option 9' },
    { value: 'Option 10', label: 'Option 10' },
    { value: 'Option 11', label: 'Option 11' },
    { value: 'Option 12', label: 'Option 12' },
  ],
};
