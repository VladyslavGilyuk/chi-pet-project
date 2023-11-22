import '@testing-library/jest-dom/extend-expect';
import Heading from './index';
import { render, screen } from '@testing-library/react';

describe('Heading component', () => {
  it('Should render with only heading', () => {
    render(<Heading heading='Test Heading' />);

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('Should render with heading and description', () => {
    render(<Heading heading='Test Heading' description='Test Description' />);

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
