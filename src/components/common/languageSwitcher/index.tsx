import { StyledButton } from './styled';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <StyledButton data-testid='en_button' onClick={() => changeLanguage('en')}>
        English
      </StyledButton>
      <StyledButton data-testid='uk_button' onClick={() => changeLanguage('uk')}>
        Українська
      </StyledButton>
    </div>
  );
}

export default LanguageSwitcher;
