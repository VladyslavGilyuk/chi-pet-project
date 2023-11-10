import { MenuButton } from '@mui/base/MenuButton';
import { Box, Button, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const HeaderContainer = styled('header')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 55px;
`;
const StyledHeaderText = styled(Typography)`
  color: ${colors.primaryBlack};
  font-style: normal;
  letter-spacing: ${fonts.spacing.medium};
`;
const ProfileContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
const StyledTypography = styled(Typography)`
  display: inline;
  color: ${colors.primaryBlack};
  font-style: normal;
  letter-spacing: ${fonts.spacing.small};
  padding-right: 14px;
`;
const IconsContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const StyledHr = styled('hr')`
  width: 0%;
  height: 32px;
  margin: 0 32px;
  color: ${colors.grayDivider};
`;
const StyledMenuButton = styled(MenuButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${colors.grayDivider};
  padding: 2px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  svg {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;
const StyledButton = styled(Button)`
  color: ${colors.primaryRed};
  background-color: ${colors.grayLightest};
  font-weight: ${fonts.weight.medium};
`;

const Listbox = styled('ul')(`
  list-style-type: none;
  padding: 0;
  margin: 1px;
  `);
export {
  HeaderContainer,
  StyledHeaderText,
  StyledTypography,
  ProfileContainer,
  StyledHr,
  IconsContainer,
  StyledMenuButton,
  StyledButton,
  Listbox,
};
