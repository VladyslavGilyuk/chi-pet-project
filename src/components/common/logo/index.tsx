import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import { StyledImage, StyledTypography, StyledWrapper } from './styled';

const Logo = () => {
  return (
    <StyledWrapper>
      <StyledImage>
        <LogoIcon />
      </StyledImage>
      <StyledTypography> Dashboard Kit </StyledTypography>
    </StyledWrapper>
  );
};

export default Logo;
