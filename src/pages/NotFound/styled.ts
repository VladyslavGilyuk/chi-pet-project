import { Box, Button, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../theme';

const ErrorContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const StyledButton = styled(Button)`
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  box-sizing: border-box;
  text-align: center;
  font-size: ${fonts.size.medium} !important;
  font-weight: ${fonts.weight.medium};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  border-radius: 8px;
  height: 48px;
`;

const StyledTypography = styled(Typography)`
  color: ${colors.primaryGray};
  text-align: center;
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weight.large};
  letter-spacing: ${fonts.spacing.medium};
  font-style: normal;
  line-height: 30px;
  margin-right: 5px;
`;

export { ErrorContainer, StyledButton, StyledTypography };
