import '@testing-library/jest-dom/extend-expect';
import LanguageSwitcher from './index';
import { fireEvent, render, screen } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { changeLanguage: jest.fn() } }),
}));

describe('LanguageSwitcher', () => {
  it('Should render LanguageSwitcher component', () => {
    render(<LanguageSwitcher />);

    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Українська')).toBeInTheDocument();

    const enButton = screen.getByTestId('en_button');
    const ukButton = screen.getByTestId('uk_button');

    expect(enButton).toBeInTheDocument();
    expect(ukButton).toBeInTheDocument();

    fireEvent.click(enButton);
    fireEvent.click(ukButton);
  });
});
