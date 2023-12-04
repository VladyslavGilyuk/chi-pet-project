import CircularSpinner from './components/common/spinners/circular';
import ErrorBoundary from './components/errorBoundary';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import { ROUTE_PATH } from './routes';
import { ThemeProvider } from '@mui/material';
import { GlobalStyles, theme } from './styled';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Contacts = lazy(() => import('./pages/Contacts'));
const Overview = lazy(() => import('./pages/Overview'));
const PageNotFound = lazy(() => import('./pages/NotFound'));
const SignInPage = lazy(() => import('./pages/SignIn'));
const SignUpPage = lazy(() => import('./pages/SignUp'));
const Layout = lazy(() => import('./layouts/mainLayout'));
const Tickets = lazy(() => import('./pages/Tickets'));

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<CircularSpinner />}>
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
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
