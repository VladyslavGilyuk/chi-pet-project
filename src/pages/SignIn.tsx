import React from 'react';
import Logo from '../components/common/logo';
import Heading from '../components/common/heading';
import SignInForm from '../components/form/signIn';
import { FormWrapper } from './SignIn.styled';

const SignIn: React.FC = () => {
  return (
    <div>
      <FormWrapper component='div'>
        <Logo />
        <Heading heading='Log In to Dashboard Kit' description='Enter your email and password' />
        <SignInForm />
      </FormWrapper>
    </div>
  );
};

export default SignIn;
