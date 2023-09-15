export type FieldNames = 'password' | 'email';
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
//const passwordPattern: RegExp = /^.{9,}$/i;

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
    type: 'password', //check this
  },
];

export { SingInFormHelper };
