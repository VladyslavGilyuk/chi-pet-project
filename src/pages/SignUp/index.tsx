import { FormWrapper } from './styled';
import Heading from '../../components/common/heading';
import Logo from '../../components/common/logo';
import React from 'react';
import SignUpForm from '../../components/form/singUp';

const SignUp: React.FC = () => {
  return (
    <div>
      <FormWrapper>
        <Logo />
        <Heading heading='Sign Up' description='Create a new account' />
        <SignUpForm />
      </FormWrapper>
    </div>
  );
};

export default SignUp;
