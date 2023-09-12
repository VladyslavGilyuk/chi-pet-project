import { Typography, CardMedia, styled } from '@mui/material';
import { graySideBar } from '../../theme';

const StyledCardMedia = styled(CardMedia)`
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
`;
const Text = styled(Typography)`
  text-align: center;
  color: ${graySideBar};
  font-size: 19px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  opacity: 0.7;
`;

export { StyledCardMedia, Text };
