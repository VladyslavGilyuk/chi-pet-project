import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';
import Logo from './components/Logo';
import Heading from './components/Heading';
import Form from './components/Form';

const Main = styled(Box)`
  box-sizing: border-box;
  width: 380px;
  margin: 0 auto;
  margin-top: 140px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 32px;
`;

const Login: React.FC = () => {
  return (
    <div>
      <Main component='main'>
        <Logo />
        <Heading heading='Log In to Dashboard Kit' description='Enter your email and password' />
        <Form />
      </Main>
    </div>
  );
};

export default Login;
