export type IContactFieldNames = 'firstName' | 'lastName' | 'email' | 'address';
export interface IContactField {
  name: IContactFieldNames;
  label: string;
  validations: {
    required: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  placeholder: string;
  type: 'text';
  showIcon?: boolean;
}
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const ContactsFormHelper: IContactField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    validations: {
      required: 'First Name is required',
    },
    placeholder: 'First Name',
    type: 'text',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    validations: {
      required: 'Last Name is required',
    },
    placeholder: 'Last Name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email',
    validations: {
      required: 'Email is required',
      pattern: {
        value: emailPattern,
        message: 'Invalid Email format',
      },
    },
    placeholder: 'Email',
    type: 'text',
  },
  {
    name: 'address',
    label: 'Address',
    validations: {
      required: 'Address is required',
    },
    placeholder: 'Address',
    type: 'text',
  },
];
