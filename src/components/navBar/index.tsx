import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import { links } from './helper';
import { useLocation } from 'react-router-dom';
import { HeaderWrapper, HeadingText, NavBarWrapper, StyledImage } from './styled';
import Links, { LocationType } from '../links';

const NavBar: React.FC = () => {
  const location: LocationType = useLocation();
  return (
    <>
      <NavBarWrapper>
        <HeaderWrapper>
          <StyledImage>
            <LogoIcon />
          </StyledImage>
          <HeadingText variant='h3'>Dashboard Kit</HeadingText>
        </HeaderWrapper>
        <Links links={links} location={location} />
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
