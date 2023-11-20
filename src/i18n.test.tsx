import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import i18n from './i18n';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { render, screen } from '@testing-library/react';

const SampleComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>{t('signIn.heading')}</div>
      <div>{t('signIn.description')}</div>
      <div>{t('signIn.button')}</div>
    </div>
  );
};

describe('i18n', () => {
  test('Should render with English translation', async () => {
    await act(async () => {
      render(
        <I18nextProvider i18n={i18n}>
          <SampleComponent />
        </I18nextProvider>,
      );
    });

    expect(screen.getByText('Log In to Dashboard Kit')).toBeInTheDocument();
    expect(screen.getByText('Enter your email and password')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  test('Should render with Ukrainian translation', async () => {
    await act(async () => {
      i18n.changeLanguage('uk');
    });

    await act(async () => {
      render(
        <I18nextProvider i18n={i18n}>
          <SampleComponent />
        </I18nextProvider>,
      );
    });

    expect(screen.getByText('Увійти до Dashboard Kit')).toBeInTheDocument();
    expect(screen.getByText('Введіть свою електронну пошту та пароль')).toBeInTheDocument();
    expect(screen.getByText('Увійти')).toBeInTheDocument();
  });
});
