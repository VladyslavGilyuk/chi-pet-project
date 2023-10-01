import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import NavLink from '../navLink';
import { links } from './helper';
import { HeaderWrapper, HeadingText, NavBarContainer, StyledImage, StyledUl } from './styled';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <HeaderWrapper>
        <StyledImage>
          <LogoIcon />
        </StyledImage>
        <HeadingText variant='h3'>Dashboard Kit</HeadingText>
      </HeaderWrapper>
      <StyledUl>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink link={link} />
          </li>
        ))}
      </StyledUl>
    </NavBarContainer>
  );
};

export default NavBar;
