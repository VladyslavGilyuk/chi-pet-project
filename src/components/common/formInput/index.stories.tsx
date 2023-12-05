import FormInput from './index';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'FormInput',
  component: FormInput,
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockRegister = (): any => {
  return;
};
export const Default: Story = {
  args: {
    label: 'Example Label',
    name: 'firstName',
    validations: { required: 'string' },
    placeholder: 'Example Placeholder',
    type: 'text',
    register: mockRegister,
    isError: false,
    showIcon: false,
    helperMsg: '',
    isFullWidth: false,
  },
};
export const Password: Story = {
  args: {
    label: 'Example Label',
    name: 'firstName',
    validations: { required: 'string' },
    placeholder: 'Example Placeholder',
    type: 'password',
    register: mockRegister,
    isError: false,
    showIcon: true,
    helperMsg: '',
    isFullWidth: false,
  },
};
export const WithError: Story = {
  args: {
    label: 'Example Label',
    name: 'firstName',
    validations: { required: 'string' },
    placeholder: 'Example Placeholder',
    type: 'text',
    register: mockRegister,
    isError: true,
    showIcon: true,
    helperMsg: 'Example helper message',
    isFullWidth: false,
  },
};
