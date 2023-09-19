import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          heading: {
            signIn: 'Log In to Dashboard Kit',
            signUp: 'Sign Up',
          },
          description: {
            signIn: 'Enter your email and password',
            signUp: 'Create a new account',
          },
          button: {
            signIn: 'Log in',
            signUp: 'Register',
          },
          footer: {
            signIn: 'Don’t have an account?',
          },
          link: {
            signIn: 'Sign up',
          },
          label: {
            email: 'Email',
            password: 'Password',
            firstName: 'First Name',
            lastName: 'Last Name',
            confirmPassword: 'Confirm Password',
          },
          required: {
            email: 'Email is required',
            password: 'Password is required',
            firstName: 'First Name is required',
            lastName: 'Last Name is required',
            passwordConfirmation: 'Password confirmation is required',
          },
          placeholder: {
            email: 'Email address',
            password: 'Password',
            firstName: 'First name',
            lastName: 'Last name',
            passwordConfirmation: 'Password',
          },
          message: {
            email: 'Invalid email address',
            password: 'Min 6 characters, 1 number, 1 UpperCase letter',
            passwordConfirmation: 'Passwords do not match',
          },
        },
      },
      uk: {
        translation: {
          heading: {
            signIn: 'Увійти до Dashboard Kit',
            signUp: 'Зареєструватися',
          },
          description: {
            signIn: 'Введіть свою електронну пошту та пароль',
            signUp: 'Створити новий обліковий запис',
          },
          button: {
            signIn: 'Увійти',
            signUp: 'Зареєструватися',
          },
          footer: {
            signIn: 'Немає облікового запису?',
          },
          link: {
            signIn: 'Зареєструйтесь',
          },
          label: {
            email: 'Електронна Пошта',
            password: 'Пароль',
            firstName: 'Ім’я',
            lastName: 'Прізвище',
            confirmPassword: 'Підтвердити Пароль',
          },
          required: {
            email: 'Електронну пошта обов’язкова',
            password: 'Пароль обов’язковий',
            firstName: 'Ім’я обов’язкове',
            lastName: 'Прізвище обов’язкове',
            passwordConfirmation: 'Підтвердження пароля обов’язкове',
          },
          placeholder: {
            email: 'Електронна пошта',
            password: 'Пароль',
            firstName: 'Ім’я',
            lastName: 'Прізвище',
            passwordConfirmation: 'Пароль',
          },
          message: {
            email: 'Невірний формат електронної пошти',
            password: 'Мінімум 6 символів, 1 цифра, 1 велика літера',
            passwordConfirmation: 'Паролі не співпадають',
          },
        },
      },
    },
  });

export default i18n;
