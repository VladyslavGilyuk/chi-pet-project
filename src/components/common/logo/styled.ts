import { Box, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const StyledWrapper = styled(Box)`
  width: 100%;
  max-width: 316px;
  word-wrap: break-word;
  margin-bottom: 32px;
`;
const StyledImage = styled(Box)`
  text-align: center;
  cursor: pointer;
  svg {
    width: 48px;
    height: 48px;
  }
`;
const StyledTypography = styled(Typography)`
  text-align: center;
  color: ${colors.graySideBar};
  font-size: 19px;
  font-weight: ${fonts.weight.large};

  letter-spacing: ${fonts.spacing.large};
  font-style: normal;
  line-height: normal;
  opacity: 0.7;
  margin-top: 12px;
`;

export { StyledWrapper, StyledImage, StyledTypography };
