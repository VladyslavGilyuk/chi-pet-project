import '@testing-library/jest-dom';
import { DefaultCell } from './defaultCell';
import { render, screen } from '@testing-library/react';

describe('DefaultCell component', () => {
  it('Should render all text fields with corresponding text', () => {
    const primaryText = 'Primary Text';
    const secondaryText = 'Secondary Text';
    const adressText = 'Address Text';

    render(
      <DefaultCell
        primaryText={primaryText}
        secondaryText={secondaryText}
        adressText={adressText}
      />,
    );

    expect(screen.getByTestId('heading_Primary Text')).toHaveTextContent(primaryText);
    expect(screen.getByTestId('text')).toHaveTextContent(secondaryText);
    expect(screen.getByTestId('address')).toHaveTextContent(adressText);
  });
});
