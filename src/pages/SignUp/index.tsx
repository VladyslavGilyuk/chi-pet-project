import Heading from '../../components/common/heading';
import LanguageSwitcher from '../../components/common/languageSwitcher';
import Logo from '../../components/common/logo';
import React from 'react';
import SignUpForm from '../../components/form/singUp';
import { useTranslation } from 'react-i18next';
import { FormContainer, Wrapper } from './styled';

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <FormContainer>
        <LanguageSwitcher />
        <Logo />
        <Heading heading={t('signUp.heading')} description={t('signUp.description')} />
        <SignUpForm />
      </FormContainer>
    </Wrapper>
  );
};

export default SignUp;
