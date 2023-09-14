/* eslint-disable @typescript-eslint/no-explicit-any */
const SingInFormHelper: {
  name: 'password' | 'email';
  label: string;
  validations: any; //change
  placeholder: any;
}[] = [
  {
    name: 'email',
    label: 'Email', // check?
    validations: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Invalid email address',
      },
    },
    placeholder: 'Email address',
  },
];
// map this

export { SingInFormHelper };
