import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { colors, fonts } from '../../theme';

const HeaderContainer = styled(Box)`
  width: 100%;
  background: wheat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 55px;
`;
const ProfileContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
const StyledTypography = styled(Typography)`
  display: inline;
  color: ${colors.primaryBlack};
  font-size: ${fonts.size.medium};
  font-style: normal;
  font-weight: ${fonts.weight.medium};
  line-height: 20px;
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
export { HeaderContainer, StyledTypography, ProfileContainer, StyledHr, IconsContainer };
