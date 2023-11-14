import '@testing-library/jest-dom/extend-expect';
import LanguageSwitcher from './index';
import { render } from '@testing-library/react';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ i18n: { changeLanguage: jest.fn() } }),
}));

describe('LanguageSwitcher', () => {
  it('renders LanguageSwitcher component', () => {
    const { getByText } = render(<LanguageSwitcher />);

    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('Українська')).toBeInTheDocument();
  });
});
