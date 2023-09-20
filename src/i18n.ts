import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uk from './locales/uk.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en.translation,
      },
      uk: {
        translation: uk.translation,
      },
    },
  });

export default i18n;
