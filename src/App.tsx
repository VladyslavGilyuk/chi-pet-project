import React from 'react';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { grayBackground } from './theme';
import { Helmet } from 'react-helmet';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle`
  //@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');
  body {
    //eslint not working here ???
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    font-weight: 400; //double check
    background-color: ${grayBackground};
 }
`;

function App() {
  return (
    <div className='App'>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' index element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
