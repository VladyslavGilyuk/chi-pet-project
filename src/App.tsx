import CircularSpinner from './components/common/spinners/circular';
import ErrorBoundary from './components/errorBoundary';
import { ROUTE_PATH } from './routes';
import { ThemeProvider } from '@mui/material';
import { GlobalStyles, theme } from './styled';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const LazyContacts = lazy(() => import('./pages/Contacts'));
const LazyOverview = lazy(() => import('./pages/Overview'));
const LazyPageNotFound = lazy(() => import('./pages/NotFound'));
const LazySignInPage = lazy(() => import('./pages/SignIn'));
const LazySignUpPage = lazy(() => import('./pages/SignUp'));
const LazyLayout = lazy(() => import('./layouts/mainLayout'));
const LazyTickets = lazy(() => import('./pages/Tickets'));
const LazyPrivateRoute = lazy(() => import('./routes/privateRoute'));
const LazyPublicRoute = lazy(() => import('./routes/publicRoute'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Suspense fallback={<CircularSpinner />}>
          <Routes>
            <Route element={<LazyPublicRoute />}>
              <Route path={ROUTE_PATH.SignIn} index element={<LazySignInPage />} />
              <Route path={ROUTE_PATH.SignUp} element={<LazySignUpPage />} />
            </Route>
            <Route element={<LazyPrivateRoute />}>
              <Route path={ROUTE_PATH.Home} element={<LazyLayout />}>
                <Route index path={ROUTE_PATH.Home} element={<LazyOverview />} />
                <Route path={ROUTE_PATH.Tickets} element={<LazyTickets />} />
                <Route path={ROUTE_PATH.Contacts} element={<LazyContacts />} />
              </Route>
            </Route>
            <Route path='*' element={<LazyPageNotFound />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
