import '@testing-library/jest-dom/extend-expect';
import ErrorBoundary from '.';
import { render, screen } from '@testing-library/react';

describe('ErrorBoundary', () => {
  test('Should render correct error', () => {
    console.error = jest.fn(); // eslint-disable-line no-console
    const ThrowErrow = () => {
      throw new Error('Test');
    };
    render(
      <ErrorBoundary>
        <ThrowErrow />
      </ErrorBoundary>,
    );
    expect(screen.getByTestId('error_message')).toBeVisible();
  });
});
