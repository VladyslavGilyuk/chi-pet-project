import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ROUTE_PATH } from '../../routes';
import { ReactComponent as RingIcon } from '../../assets/ring.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { links } from '../navBar/helper';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { user } from '../../store/user/selectors';
import { Dropdown, Menu, MenuItem } from '@mui/base';
import {
  HeaderContainer,
  IconsContainer,
  Listbox,
  ProfileContainer,
  StyledButton,
  StyledHeaderText,
  StyledHr,
  StyledMenuButton,
  StyledTypography,
} from './styled';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const currentUser = useSelector(user);
  const location = useLocation();
  const navigate = useNavigate();
  const pageName = useMemo(
    () => links.find((link) => link.to === location.pathname)?.name ?? '',
    [location.pathname],
  );
  const createHandleMenuClick = () => {
    localStorage.removeItem('user');
    navigate(ROUTE_PATH.SignIn);
  };
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
        <Dropdown>
          <StyledMenuButton>
            <ProfileIcon />
          </StyledMenuButton>
          <Menu slots={{ listbox: Listbox }}>
            <MenuItem>
              <StyledButton onClick={createHandleMenuClick}>Log Out</StyledButton>
            </MenuItem>
          </Menu>
        </Dropdown>
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
