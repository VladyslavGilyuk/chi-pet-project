import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uk from './locales/uk.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      uk: {
        translation: uk,
      },
    },
  });

export default i18n;
