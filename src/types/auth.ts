import { FieldValues } from 'react-hook-form';
export interface ISignIn {
  email: string;
  password: string;
}
export interface ISignUp extends ISignIn {
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
}

export interface ICommonFieldValues extends FieldValues {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  passwordConfirmation: string;
}
