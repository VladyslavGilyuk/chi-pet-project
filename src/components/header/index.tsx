import { ReactComponent as RingIcon } from '../../assets/ring.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import UserDropdownMenu from './userDropdownMenu';
import { links } from '../navBar/helper';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { user } from '../../store/user/selectors';
import {
  HeaderContainer,
  IconsContainer,
  ProfileContainer,
  StyledHeaderText,
  StyledHr,
  StyledTypography,
} from './styled';

const Header: React.FC = () => {
  const currentUser = useSelector(user);
  const location = useLocation();
  const pageName = useMemo(
    () => links.find((link) => link.to === location.pathname)?.name ?? '',
    [location.pathname],
  );

  return (
    <HeaderContainer>
      <StyledHeaderText variant='h5'>{pageName}</StyledHeaderText>
      <ProfileContainer>
        <IconsContainer>
          <SearchIcon />
          <RingIcon />
        </IconsContainer>
        <StyledHr />
        <StyledTypography>{`${currentUser.firstName} ${currentUser.lastName}`}</StyledTypography>
        <UserDropdownMenu />
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
