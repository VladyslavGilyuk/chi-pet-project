import '@testing-library/jest-dom';
import Logo from './index';
import { render } from '@testing-library/react';

test('renders logo and text', () => {
  const { getByText, getByTestId } = render(<Logo />);

  const logoIcon = getByTestId('logo-icon');
  const text = getByText(/Dashboard Kit/i);
  expect(logoIcon).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
