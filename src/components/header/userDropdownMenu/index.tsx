import { ReactComponent as ProfileIcon } from '../../../assets/profile.svg';
import { ROUTE_PATH } from '../../../routes';
import { logOut } from '../../../store/user/slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Menu, MenuItem } from '@mui/base';
import { Listbox, StyledButton, StyledMenuButton } from './styled';

const UserDropdownMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createHandleMenuClick = () => {
    dispatch(logOut());
    navigate(ROUTE_PATH.SignIn);
  };
  return (
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
  );
};
export default UserDropdownMenu;
