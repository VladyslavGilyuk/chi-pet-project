import { useTranslation } from 'react-i18next';

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

export interface TranslatedLabels {
  SingInFormHelper: ISingInFormHelper[];
  SingUpFormHelper: ISingInFormHelper[];
}
const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordPattern: RegExp = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

export const getFormHelper = (): TranslatedLabels => {
  const { t } = useTranslation();

  const SingInFormHelper: ISingInFormHelper[] = [
    {
      name: 'email',
      label: t('label.email'),
      validations: {
        required: t('required.email'),
        pattern: {
          value: emailPattern,
          message: t('message.email'),
        },
      },
      placeholder: t('placeholder.email'),
      type: 'text',
    },
    {
      name: 'password',
      label: t('label.password'),
      validations: {
        required: t('required.password'),
      },
      placeholder: t('placeholder.password'),
      type: 'password',
    },
  ];

  const SingUpFormHelper: ISingInFormHelper[] = [
    {
      name: 'email',
      label: t('label.email'),
      validations: {
        required: t('required.email'),
        pattern: {
          value: emailPattern,
          message: t('message.email'),
        },
      },
      placeholder: t('placeholder.email'),
      type: 'text',
    },
    {
      name: 'firstName',
      label: t('label.firstName'),
      validations: {
        required: t('required.firstName'),
      },
      placeholder: t('placeholder.firstName'),
      type: 'text',
    },
    {
      name: 'lastName',
      label: t('label.lastName'),
      validations: {
        required: t('required.lastName'),
      },
      placeholder: t('placeholder.lastName'),
      type: 'text',
    },
    {
      name: 'password',
      label: t('label.password'),
      validations: {
        required: t('required.password'),
        pattern: {
          value: passwordPattern,
          message: t('message.password'),
        },
      },
      placeholder: t('placeholder.password'),
      type: 'password',
    },
    {
      name: 'passwordConfirmation',
      label: t('label.confirmPassword'),
      validations: {
        required: t('required.passwordConfirmation'),
        pattern: {
          value: passwordPattern,
          message: t('message.passwordConfirmation'),
        },
      },
      placeholder: t('placeholder.passwordConfirmation'),
      type: 'password',
    },
  ];
  return { SingInFormHelper, SingUpFormHelper };
};
