import '@testing-library/jest-dom/extend-expect';
import Heading from './index';
import { render } from '@testing-library/react';

describe('Heading component', () => {
  it('renders with only heading', () => {
    const { getByText } = render(<Heading heading='Test Heading' />);

    expect(getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders with heading and description', () => {
    const { getByText } = render(<Heading heading='Test Heading' description='Test Description' />);

    expect(getByText('Test Heading')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });
});
