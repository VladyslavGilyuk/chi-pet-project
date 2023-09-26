import 'react-toastify/dist/ReactToastify.css';
import { FormWrapper } from './styled';
import Heading from '../../components/common/heading';
import LanguageSwitcher from '../../components/common/languageSwitcher';
import Logo from '../../components/common/logo';
import React from 'react';
import SignInForm from '../../components/form/signIn';
import ToastError from '../../components/common/toast';
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <FormWrapper>
        <ToastError />
        <LanguageSwitcher />
        <Logo />
        <Heading heading={t('signIn.heading')} description={t('signIn.description')} />
        <SignInForm />
      </FormWrapper>
    </div>
  );
};

export default SignIn;
