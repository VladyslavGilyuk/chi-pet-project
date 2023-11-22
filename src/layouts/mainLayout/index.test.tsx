import '@testing-library/jest-dom';
import Layout from './index';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

jest.mock('../../components/navBar', () => ({
  __esModule: true,
  default: () => <div data-testid='navbar'>Mocked NavBar</div>,
}));

jest.mock('../../components/header', () => ({
  __esModule: true,
  default: () => <div data-testid='header'>Mocked Header</div>,
}));

describe('Layout component', () => {
  it('renders a component within the Outlet', () => {
    render(
      <MemoryRouter initialEntries={['/some-route']}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              path='some-route'
              element={<div data-testid='some-component'>Some Component</div>}
            />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('some-component')).toBeInTheDocument();
  });
});
