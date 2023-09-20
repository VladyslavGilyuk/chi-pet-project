import { FormWrapper } from './styled';
import Heading from '../../components/common/heading';
import LanguageSwitcher from '../../components/common/languageSwitcher';
import Logo from '../../components/common/logo';
import React from 'react';
import SignUpForm from '../../components/form/singUp';
import { useTranslation } from 'react-i18next';

const SignUp: React.FC = () => {
const { t } = useTranslation();
  return (
    <div>
      <FormWrapper>
         <LanguageSwitcher />
        <Logo />
         <Heading heading={t('heading.signUp')} description={t('description.signUp')} />
        <SignUpForm />
      </FormWrapper>
    </div>
  );
};

export default SignUp;
