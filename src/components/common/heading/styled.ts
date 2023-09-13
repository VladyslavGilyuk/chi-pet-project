import { Typography, styled } from '@mui/material';
import { primaryBlack, primaryGray } from '../../../theme';

const HeadingText = styled(Typography)`
  color: ${primaryBlack};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
`;

const Text = styled(Typography)`
  color: ${primaryGray};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.3px;
`;

export { HeadingText, Text };
