import { Box, Button, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const FormInputWrapper = styled(Box)`
  width: 100%;
`;

const StyledLoginButton = styled(Button)`
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

export { FormInputWrapper, StyledLoginButton };
