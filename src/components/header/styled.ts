import { Box, Typography, styled } from '@mui/material';
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

export {
  HeaderContainer,
  StyledHeaderText,
  StyledTypography,
  ProfileContainer,
  StyledHr,
  IconsContainer,
};
