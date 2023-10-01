import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import NavLink from '../navLink';
import { links } from './helper';
import { HeaderWrapper, HeadingText, NavBarContainer, StyledImage } from './styled';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <HeaderWrapper>
        <StyledImage>
          <LogoIcon />
        </StyledImage>
        <HeadingText variant='h3'>Dashboard Kit</HeadingText>
      </HeaderWrapper>
      {links.map((link) => (
        <NavLink key={link.name} link={link} />
      ))}
    </NavBarContainer>
  );
};

export default NavBar;
