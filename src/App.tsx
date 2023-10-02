import ErrorBoundary from './components/errorBoundary';
import Layout from './layouts/mainLayout';
import Overview from './pages/Overview';
import PageNotFound from './pages/NotFound';
import { ROUTE_PATH } from './routes';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import { ThemeProvider } from '@mui/material';
import Tickets from './pages/Tickets';
import { GlobalStyles, theme } from './styled';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ErrorBoundary>
          <Routes>
            <Route path={ROUTE_PATH.SingIn} index element={<SignInPage />} />
            <Route path={ROUTE_PATH.SingUp} element={<SignUpPage />} />
            <Route path={ROUTE_PATH.Home} element={<Layout />}>
              <Route index path={ROUTE_PATH.Home} element={<Overview />} />
              <Route path={ROUTE_PATH.Tickets} element={<Tickets />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </ErrorBoundary>
      </ThemeProvider>
    </div>
  );
}

export default App;
