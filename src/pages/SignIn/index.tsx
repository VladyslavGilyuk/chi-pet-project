import { FormWrapper } from './styled';
import Heading from '../../components/common/heading';
import LanguageSwitcher from '../../components/common/languageSwitcher';
import Logo from '../../components/common/logo';
import React from 'react';
import SignInForm from '../../components/form/signIn';
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <FormWrapper>
        <LanguageSwitcher />
        <Logo />
        <Heading heading={t('signIn.heading')} description={t('signIn.description')} />
        <SignInForm />
      </FormWrapper>
    </div>
  );
};

export default SignIn;
