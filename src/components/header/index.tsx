import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as RingIcon } from '../../assets/ring.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { Typography } from '@mui/material';
import {
  HeaderContainer,
  IconsContainer,
  ProfileContainer,
  StyledHr,
  StyledTypography,
} from './styled';

function Header() {
  return (
    <HeaderContainer>
      <Typography>Overview</Typography>
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
