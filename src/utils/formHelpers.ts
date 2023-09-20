import { useTranslation } from 'react-i18next';
export type TSignInFieldNames = 'password' | 'email';
export type TSignUpFieldNames =
  | 'password'
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'passwordConfirmation';
export type TFieldType = 'password' | 'text';
export interface IBaseField {
  label: string;
  validations: {
    required: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  placeholder: string;
  type: TFieldType;
  showIcon?: boolean;
}

export interface ISingInFormHelper extends IBaseField {
  name: TSignInFieldNames;
}

export interface ISingUpFormHelper extends IBaseField {
  name: TSignUpFieldNames;
}

const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

const useFormHelpers = () => {
  const { t } = useTranslation();

  const SingInFormHelper: ISingInFormHelper[] = [
    {
      name: 'email',
      label: t('signIn.label.email'),
      validations: {
        required: t('signIn.required.email'),
        pattern: {
          value: emailPattern,
          message: t('signIn.message.email'),
        },
      },
      placeholder: t('signIn.placeholder.email'),
      type: 'text',
    },
    {
      name: 'password',
      label: t('signIn.label.password'),
      validations: {
        required: t('signIn.required.password'),
        pattern: {
          value: passwordPattern,
          message: t('signIn.message.password'),
        },
      },
      placeholder: t('signIn.placeholder.password'),
      type: 'password',
      showIcon: true,
    },
  ];

  const SingUpFormHelper: ISingUpFormHelper[] = [
    {
      name: 'email',
      label: t('signUp.label.email'),
      validations: {
        required: t('signUp.required.email'),
        pattern: {
          value: emailPattern,
          message: t('signUp.message.email'),
        },
      },
      placeholder: t('signUp.placeholder.email'),
      type: 'text',
    },
    {
      name: 'firstName',
      label: t('signUp.label.firstName'),
      validations: {
        required: t('signUp.required.firstName'),
      },
      placeholder: t('signUp.placeholder.firstName'),
      type: 'text',
    },
    {
      name: 'lastName',
      label: t('signUp.label.lastName'),
      validations: {
        required: t('signUp.required.lastName'),
      },
      placeholder: t('signUp.placeholder.lastName'),
      type: 'text',
    },
    {
      name: 'password',
      label: t('signUp.label.password'),
      validations: {
        required: t('signUp.required.password'),
        pattern: {
          value: passwordPattern,
          message: t('signUp.message.password'),
        },
      },
      placeholder: t('signUp.placeholder.password'),
      type: 'password',
      showIcon: true,
    },
    {
      name: 'passwordConfirmation',
      label: t('signUp.label.confirmPassword'),
      validations: {
        required: t('signUp.required.passwordConfirmation'),
        pattern: {
          value: passwordPattern,
          message: t('signUp.message.passwordConfirmation'),
        },
      },
      placeholder: t('signUp.placeholder.passwordConfirmation'),
      type: 'password',
      showIcon: true,
    },
  ];

  return { SingInFormHelper, SingUpFormHelper };
};

export default useFormHelpers;
