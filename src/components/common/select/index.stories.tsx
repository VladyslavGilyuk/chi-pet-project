import CustomSelect from './index';
import { Meta } from '@storybook/react';
import { useState } from 'react';

const meta = {
  title: 'CustomSelect',
  component: CustomSelect,
} satisfies Meta<typeof CustomSelect>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Basic: any = (args: any) => {
  const [value, setValue] = useState('');
  return (
    <CustomSelect
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value.toUpperCase())}
    />
  );
};

Basic.args = {
  label: 'Label',
  placeholder: 'Select an option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};
