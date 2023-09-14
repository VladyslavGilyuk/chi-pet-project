import React from 'react';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from '@mui/material/GlobalStyles';
import { grayBackground } from './theme';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

const applicationGlobalStyles = {
  //font-family = 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap';
  html: {
    fontFamily:
      "@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap')",
  },
  body: {
    fontFamily:
      "@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap')",
    //eslint not working here ???
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    fontWeight: 400, //double check
    backgroundColor: `${grayBackground}`,
  },
};

function App() {
  return (
    <div className='App'>
      <GlobalStyles styles={applicationGlobalStyles} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' index element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
