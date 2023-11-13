import { Box, Button, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const StyledHeading = styled(Typography)`
  color: ${colors.primaryBlack};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
  margin-bottom: 48px;
`;

const StyledLoginButton = styled(Button)`
  background-color: ${colors.primaryBlue};
  color: ${colors.primaryWhite};
  box-sizing: border-box;
  text-align: center;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  border-radius: 8px;
  height: 48px;
  text-transform: capitalize;
`;

const StyledCancelButton = styled(Button)`
  width: 100%;
  padding: 0px;
  background-color: transparent;
  color: ${colors.primaryBlue};
  text-align: center;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.small};
  line-height: 20px;
  letter-spacing: 0.2px;
  margin-top: 20px;
  text-transform: capitalize;

  &:hover {
    background-color: transparent;
    color: ${colors.primaryBlue};
  }
`;
const FlexContainer = styled(Box)`
  & .MuiButtonBase-root-MuiButton-root {
    font-size: 14px !important;
  }
`;

const HelperText = styled(Box)`
  color: #d32f2f;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;
const HelperImageText = styled(Box)`
  color: ${colors.primaryBlack};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;
const EmptyHelperText = styled(Box)`
  visibility: hidden;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  text-align: left;
  margin-top: 3px;
  margin-right: 14px;
  margin-bottom: 0;
  margin-left: 14px;
`;

export {
  StyledHeading,
  StyledLoginButton,
  StyledCancelButton,
  FlexContainer,
  HelperText,
  EmptyHelperText,
  HelperImageText,
};
