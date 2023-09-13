import { Typography, styled } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { graySideBar } from '../../../theme';

const StyledWrapper = styled('div')`
  width: 100%;
  max-width: 316px;
  word-wrap: break-word;
  margin-bottom: 32px;
`;
const StyledImage = styled(SvgIcon)`
  cursor: pointer;
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
`;
const Text = styled(Typography)`
  font-family: Mulish;
  text-align: center;
  color: ${graySideBar};
  font-size: 19px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  opacity: 0.7;
  margin-top: 12px;
`;

export { StyledWrapper, StyledImage, Text };
