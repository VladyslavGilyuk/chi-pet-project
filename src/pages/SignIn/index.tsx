import { FormWrapper } from './styled';
import Heading from '../../components/common/heading';
import Logo from '../../components/common/logo';
import React from 'react';
import SignInForm from '../../components/form/signIn';

const SignIn: React.FC = () => {
  return (
    <div>
      <FormWrapper>
        <Logo />
        <Heading heading='Log In to Dashboard Kit' description='Enter your email and password' />
        <SignInForm />
      </FormWrapper>
    </div>
  );
};

export default SignIn;
