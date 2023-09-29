import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as RingIcon } from '../../assets/ring.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { links } from '../navBar/helper';
import { useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  IconsContainer,
  PhotoContainer,
  ProfileContainer,
  StyledHeaderText,
  StyledHr,
  StyledTypography,
} from './styled';

const Header: React.FC = () => {
  const location = useLocation();
  const currentLink = links.find((link) => link.to === location.pathname);
  const headerText = currentLink ? currentLink.name : 'Overview';
  return (
    <HeaderContainer>
      <StyledHeaderText variant='h5'>{headerText}</StyledHeaderText>
      <ProfileContainer>
        <IconsContainer>
          <SearchIcon />
          <RingIcon />
        </IconsContainer>
        <StyledHr />
        <StyledTypography variant='body1'>Jones Ferdinand</StyledTypography>
        <PhotoContainer>
          <ProfileIcon />
        </PhotoContainer>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
