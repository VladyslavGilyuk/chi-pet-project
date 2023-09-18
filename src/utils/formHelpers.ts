export type FieldNames = 'password' | 'email' | 'firstName' | 'lastName' | 'passwordConfirmation';
export type PasswordType = 'password' | 'text';
export interface ISingInFormHelper {
  name: FieldNames;
  label: string;
  validations: {
    required: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  placeholder: string;
  type: PasswordType;
}
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
const SingInFormHelper: ISingInFormHelper[] = [
  {
    name: 'email',
    label: 'Email',
    validations: {
      required: 'Email is required',
      pattern: {
        value: emailPattern,
        message: 'Invalid email address',
      },
    },
    placeholder: 'Email address',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    validations: {
      required: 'Password is required',
    },
    placeholder: 'Password',
    type: 'password',
  },
];

const SingUpFormHelper: ISingInFormHelper[] = [
  {
    name: 'email',
    label: 'Email',
    validations: {
      required: 'Email is required',
      pattern: {
        value: emailPattern,
        message: 'Invalid email address',
      },
    },
    placeholder: 'Email address',
    type: 'text',
  },
  {
    name: 'firstName',
    label: 'firstName',
    validations: {
      required: 'First Name is required',
    },
    placeholder: 'First name',
    type: 'text',
  },
  {
    name: 'lastName',
    label: 'lastName',
    validations: {
      required: 'Last Name is required',
    },
    placeholder: 'Last name',
    type: 'text',
  },
  {
    name: 'password',
    label: 'Password',
    validations: {
      required: 'Password is required',
      pattern: {
        value: passwordPattern,
        message: 'Min 6 characters, 1 number, 1 UpperCase letter',
      },
    },
    placeholder: 'Password',
    type: 'password',
  },
  {
    name: 'passwordConfirmation',
    label: 'Confirm Password',
    validations: {
      required: 'Password confirmation is required',
    },
    placeholder: 'Password',
    type: 'password',
  },
];

export { SingInFormHelper, SingUpFormHelper };
