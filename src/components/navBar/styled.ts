import { NavLink } from 'react-router-dom';
import { Box, Divider, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const NavBarContainer = styled(Box)`
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
const StyledImage = styled(Box)`
  cursor: pointer;
  svg {
    width: 32px;
    height: 32px;
  }
`;
const LinksWrapper = styled(Box)<{ active?: string }>`
  display: flex;
  align-items: center;
  padding-left: 32px;
  background-color: ${(props) =>
    props.active ? 'rgba(169, 169, 169, 0.08)' : colors.grayBackground};
`;
const StyledLink = styled(NavLink)<{ active?: string }>`
  padding: 18px 25px;
  color: ${(props) => (props.active ? colors.primaryLightBlue : colors.graySideBar)};
  font-size: 16px;
  font-style: normal;
  font-weight: ${fonts.weight.small};
  line-height: normal;
  letter-spacing: ${fonts.spacing.small};
  text-decoration: none;
`;

const StyledIconWrapper = styled(Box)<{ active?: string }>`
  svg path {
    fill: ${(props) => (props.active ? colors.primaryLightBlue : colors.graySideBar)};
  }
`;
const StyledDivider = styled(Divider)`
  display: block;
  width: 100%;
`;
export {
  NavBarContainer,
  HeaderWrapper,
  HeadingText,
  StyledImage,
  StyledDivider,
  StyledIconWrapper,
  LinksWrapper,
  StyledLink,
};