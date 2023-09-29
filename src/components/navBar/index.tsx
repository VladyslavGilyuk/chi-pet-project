import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import { links } from './helper';
import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeadingText,
  LinksWrapper,
  NavBarWrapper,
  StyledIconWrapper,
  StyledImage,
  StyledLink,
} from './styled';

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <NavBarWrapper>
        <HeaderWrapper>
          <StyledImage>
            <LogoIcon />
          </StyledImage>
          <HeadingText variant='h3'>Dashboard Kit</HeadingText>
        </HeaderWrapper>
        {links.map((link) => (
          <div key={link.name}>
            {link.divider}
            <LinksWrapper active={location.pathname === link.to ? 'true' : ''}>
              <StyledIconWrapper active={location.pathname === link.to ? 'true' : ''}>
                {link.icon}
              </StyledIconWrapper>
              <StyledLink to={link.to} active={location.pathname === link.to ? 'true' : ''}>
                {link.name}
              </StyledLink>
            </LinksWrapper>
          </div>
        ))}
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
