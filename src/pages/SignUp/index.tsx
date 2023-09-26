import { FormWrapper } from './styled';
import Heading from '../../components/common/heading';
import LanguageSwitcher from '../../components/common/languageSwitcher';
import Logo from '../../components/common/logo';
import React from 'react';
import SignUpForm from '../../components/form/singUp';
import ToastError from '../../components/common/toast';
import { useTranslation } from 'react-i18next';

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <FormWrapper>
        <ToastError />
        <LanguageSwitcher />
        <Logo />
        <Heading heading={t('signUp.heading')} description={t('signUp.description')} />
        <SignUpForm />
      </FormWrapper>
    </div>
  );
};

export default SignUp;
