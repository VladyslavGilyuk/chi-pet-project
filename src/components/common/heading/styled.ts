import { Typography, styled } from '@mui/material';
import { primaryBlack, primaryGray, regularSize, regularWeight } from '../../../theme';

const StyledWrapper = styled('div')`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 48px;
`;
const HeadingText = styled(Typography)`
  color: ${primaryBlack};
  text-align: center;
  font-family: Mulish;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
`;

const Text = styled(Typography)`
  color: ${primaryGray};
  text-align: center;
  font-family: Mulish;
  font-size: ${regularSize};
  font-style: normal;
  font-weight: ${regularWeight};
  line-height: 20px;
  letter-spacing: 0.3px;
`;

export { HeadingText, Text, StyledWrapper };
