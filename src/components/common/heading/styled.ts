import { Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const StyledWrapper = styled('div')`
  width: 100%;
  word-wrap: break-word;
  margin-bottom: 48px;
`;
const HeadingText = styled(Typography)`
  color: ${colors.primaryBlack};
  text-align: center;
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.large};
  letter-spacing: ${fonts.spacing.medium};
  font-style: normal;
  line-height: normal;
`;

const Text = styled(Typography)`
  color: ${colors.primaryGray};
  text-align: center;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.medium};
  font-style: normal;
  line-height: 20px;
`;

export { HeadingText, Text, StyledWrapper };
