import Home from './pages/Home';
import { ROUTE_PATH } from './routes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { ThemeProvider } from '@mui/material';
import { GlobalStyles, theme } from './styled';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path={ROUTE_PATH.Home} element={<Home />} />
          <Route path={ROUTE_PATH.SingIn} index element={<SignIn />} />
          <Route path={ROUTE_PATH.SingUp} element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
