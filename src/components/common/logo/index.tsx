import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import { StyledImage, StyledTypography, StyledWrapper } from './styled';

const Logo = () => {
  return (
    <StyledWrapper>
      <StyledImage>
        <LogoIcon data-testid='logo-icon' />
      </StyledImage>
      <StyledTypography data-testid='logo-text'>Dashboard Kit</StyledTypography>
    </StyledWrapper>
  );
};

export default Logo;
