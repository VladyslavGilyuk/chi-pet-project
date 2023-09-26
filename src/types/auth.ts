import { FieldValues } from 'react-hook-form';
export interface ISignIn {
  email: string;
  password: string;
}
export interface ISignUp extends ISignIn {
  firstName: string;
  lastName: string;
  passwordConfirmation: string;
}

export interface ICommonFieldValues extends FieldValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  passwordConfirmation: string;
}
export interface ISignUpAsync {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
