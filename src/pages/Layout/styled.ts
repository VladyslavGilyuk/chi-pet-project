import { Box, Divider, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const LayoutWrapper = styled(Box)`
  width: 255px;
  background: ${colors.grayBackground};
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  padding-left: 32px;
`;
const HeaderWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
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

const StyledDivider = styled(Divider)`
  width: 100%;
  color: ${colors.grayDivider};
`;
export { LayoutWrapper, HeaderWrapper, HeadingText, StyledDivider };
