import Contacts from './pages/Contacts';
import ErrorBoundary from './components/errorBoundary';
import Layout from './layouts/mainLayout';
import Overview from './pages/Overview';
import PageNotFound from './pages/NotFound';
import PrivateRoute from './utils/privateRoute';
import PublicRoute from './utils/publicRoute';
import { ROUTE_PATH } from './routes';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import { ThemeProvider } from '@mui/material';
import Tickets from './pages/Tickets';
import { GlobalStyles, theme } from './styled';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path={ROUTE_PATH.SignIn} index element={<SignInPage />} />
            <Route path={ROUTE_PATH.SignUp} element={<SignUpPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={ROUTE_PATH.Home} element={<Layout />}>
              <Route index path={ROUTE_PATH.Home} element={<Overview />} />
              <Route path={ROUTE_PATH.Tickets} element={<Tickets />} />
              <Route path={ROUTE_PATH.Contacts} element={<Contacts />} />
            </Route>
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
