import LogoImage from '../../components/common/logoImage';
import { links } from './helper';
import { HeaderWrapper, HeadingText, LinksWrapper, NavBarWrapper, StyledLink } from './styled';

const NavBar: React.FC = () => {
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
            <LinksWrapper>
              {link.icon}
              <StyledLink to={link.to}>{link.name}</StyledLink>
            </LinksWrapper>
          </div>
        ))}
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
