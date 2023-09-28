import { NavLink } from 'react-router-dom';
import { Box, Divider, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const NavBarWrapper = styled(Box)`
  width: 255px;
  background: ${colors.grayBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 60px;
  padding-left: 32px;
`;
const HeadingText = styled(Typography)`
  color: ${colors.graySideBar};
  font-size: 19px;
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: ${fonts.spacing.large};
  margin-left: 12px;
`;

const LinksWrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding-left: 32px;
  &.isActive {
    background-color: rgba(169, 169, 169, 0.08);
  }
`;
const StyledLink = styled(NavLink)`
  padding: 18px 25px;
  color: ${colors.graySideBar};
  font-size: 16px;
  font-style: normal;
  font-weight: ${fonts.weight.small};
  line-height: normal;
  letter-spacing: ${fonts.spacing.small};
  text-decoration: none;
  &.isActive {
    color: ${colors.primaryWhite};
  }
`;
const StyledIconWrapper = styled(Box)`
  &.isActive {
    color: ${colors.primaryWhite} !important;
  }
`;
const StyledDivider = styled(Divider)`
  display: block;
  width: 100%;
`;
export {
  NavBarWrapper,
  HeaderWrapper,
  HeadingText,
  StyledDivider,
  StyledIconWrapper,
  LinksWrapper,
  StyledLink,
};
