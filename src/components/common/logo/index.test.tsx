import '@testing-library/jest-dom';
import Logo from './index';
import { render, screen } from '@testing-library/react';

test('Should render logo and text', () => {
  render(<Logo />);

  expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  expect(screen.getByTestId('logo-text')).toBeInTheDocument();
});
