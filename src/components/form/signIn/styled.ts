import { Box, Button, InputLabel, Link, TextField, Typography, styled } from '@mui/material';

import { colors, fonts } from '../../../theme';

const FormInputWrapper = styled(Box)`
  width: 100%;
`;

const StyledLabel = styled(InputLabel)`
  width: 100%;
  box-sizing: border-box;
  color: ${colors.primaryGray};
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.large};
  letter-spacing: ${fonts.spacing.medium};
  line-height: normal;
  text-transform: uppercase;
`;

const StyledInput = styled(TextField)`
  box-sizing: border-box;
  color: ${colors.grayDark};
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.medium};
  font-style: normal;
  line-height: 20px;
  border-radius: 8px;
  border: 1px solid ${colors.grayLightest};
  background: ${colors.grayExtraLight};
  margin-top: 5px;
  margin-bottom: 5px;
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

export {
  FormInputWrapper,
  StyledLabel,
  StyledInput,
  StyledLoginButton,
  StyledFooterText,
  StyledSignUpLink,
  FlexContainer,
};
