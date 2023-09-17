import { Box, Button, Link, Typography, styled } from '@mui/material';

import { colors, fonts } from '../../../theme';

const FormInputWrapper = styled(Box)`
  width: 100%;
`;

const StyledLoginButton = styled(Button)`
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  box-sizing: border-box;
  text-align: center;
  font-size: ${fonts.size.medium} !important; // ?
  font-weight: ${fonts.weight.medium};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  border-radius: 8px;
  height: 48px;
`;
const FlexContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const StyledFooterText = styled(Typography)`
  color: ${colors.primaryGray};
  text-align: center;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.medium};
  font-style: normal;
  line-height: 20px;
  margin-right: 5px;
`;

const StyledSignUpLink = styled(Link)`
  box-sizing: border-box;
  color: ${colors.primaryBlue};
  text-align: center;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.medium};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
`;

export { FormInputWrapper, StyledLoginButton, StyledFooterText, StyledSignUpLink, FlexContainer };
