import 'react-toastify/dist/ReactToastify.css';
import Heading from '../../components/common/heading';
import LanguageSwitcher from '../../components/common/languageSwitcher';
import Logo from '../../components/common/logo';
import React from 'react';
import SignInForm from '../../components/form/signIn';
import { useTranslation } from 'react-i18next';
import { FormContainer, Wrapper } from './styled';

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <FormContainer>
        <LanguageSwitcher />
        <Logo />
        <Heading heading={t('signIn.heading')} description={t('signIn.description')} />
        <SignInForm />
      </FormContainer>
    </Wrapper>
  );
};

export default SignIn;
