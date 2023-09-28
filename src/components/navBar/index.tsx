import LogoImage from '../../components/common/logoImage';
import { links } from './helper';
import { useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeadingText,
  LinksWrapper,
  NavBarWrapper,
  StyledIconWrapper,
  StyledLink,
} from './styled';

const NavBar: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <NavBarWrapper>
        <HeaderWrapper>
          <LogoImage />
          <HeadingText variant='h3'>Dashboard Kit</HeadingText>
        </HeaderWrapper>
        {links.map((link) => (
          <div key={link.name}>
            {link.divider}
            <LinksWrapper $active={location.pathname === link.to}>
              <StyledIconWrapper $active={location.pathname === link.to}>
                {link.icon}
              </StyledIconWrapper>
              <StyledLink to={link.to} $active={location.pathname === link.to}>
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
