type FieldNames = 'password' | 'email';
interface ISingInFormHelper {
  name: FieldNames;
  label: string;
  validations: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
  placeholder: string;
  type: string;
}

const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordPattern: RegExp = /^.{9,}$/i;

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
      pattern: {
        value: passwordPattern,
        message: 'Password should be longer than 8 characters',
      },
    },
    placeholder: 'Password',
    type: 'password',
  },
];

// map this

export { SingInFormHelper };
