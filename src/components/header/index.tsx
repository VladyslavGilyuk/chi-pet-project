import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as RingIcon } from '../../assets/ring.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { Typography } from '@mui/material';
import { links } from '../navBar/helper';
import { useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  IconsContainer,
  ProfileContainer,
  StyledHr,
  StyledTypography,
} from './styled';

function Header() {
  const location = useLocation();

  const currentLink = links.find((link) => link.to === location.pathname);
  const headerText = currentLink ? currentLink.name : 'Overview';
  return (
    <HeaderContainer>
      <Typography>{headerText}</Typography>
      <ProfileContainer>
        <IconsContainer>
          <SearchIcon />
          <RingIcon />
        </IconsContainer>
        <StyledHr />
        <StyledTypography>Jones Ferdinand</StyledTypography>
        <ProfileIcon />
      </ProfileContainer>
    </HeaderContainer>
  );
}

export default Header;
