import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PageNotFound from './index';
import { ROUTE_PATH } from '../../routes';
import { render, screen } from '@testing-library/react';

describe('PageNotFound Component', () => {
  test('renders PageNotFound component with the correct text', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );

    const errorText = screen.getByText(/Error 404: Page Not Found/i);
    expect(errorText).toBeInTheDocument();
  });

  test('renders a link with the correct route', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );

    const linkElement = screen.getByRole('link', { name: /Back to Overview/i });
    expect(linkElement).toHaveAttribute('href', ROUTE_PATH.Home);
  });

  test('renders a button with the correct text', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );

    const buttonElement = screen.getByRole('button', { name: /Back to Overview/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
