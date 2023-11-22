import '@testing-library/jest-dom';
import LinearGradients from './index';
import { render, screen } from '@testing-library/react';

const mockGradients = [
  { id: 'gradient1', color: '#ff0000', opacity: 1 },
  { id: 'gradient2', color: '#00ff00', opacity: 0.75 },
];

describe('LinearGradients component', () => {
  it('renders linear gradients correctly', () => {
    render(<LinearGradients gradients={mockGradients} />);

    mockGradients.forEach(({ id }) => {
      const gradientElement = screen.getByTestId(id);
      expect(gradientElement).toBeInTheDocument();
      expect(gradientElement).toHaveAttribute('id', id);
    });
  });
});
