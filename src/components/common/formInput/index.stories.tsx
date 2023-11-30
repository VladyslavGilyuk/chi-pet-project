/* eslint-disable no-console */

import FormInput from './index';
import { ICommonFieldValues } from '../../../types/auth';
import { UseFormRegister } from 'react-hook-form';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'FormInput',
  component: FormInput,
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockRegister = (): UseFormRegister<ICommonFieldValues> | any => {
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
    showIcon: true,
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
export const HiddenIcon: Story = {
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
export const HelperMsg: Story = {
  args: {
    label: 'Example Label',
    name: 'firstName',
    validations: { required: 'string' },
    placeholder: 'Example Placeholder',
    type: 'text',
    register: mockRegister,
    isError: false,
    showIcon: true,
    helperMsg: 'Example helper message',
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
    helperMsg: '',
    isFullWidth: false,
  },
};
