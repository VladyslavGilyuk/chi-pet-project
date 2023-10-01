import { Box, Divider, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const NavBarContainer = styled('nav')`
  width: 255px;
  background: ${colors.grayBackground};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderWrapper = styled(Box)`
  width: 255px;
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
const StyledUl = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledDivider = styled(Divider)`
  display: block;
  width: 100%;
`;
export { NavBarContainer, HeaderWrapper, HeadingText, StyledImage, StyledDivider, StyledUl };
