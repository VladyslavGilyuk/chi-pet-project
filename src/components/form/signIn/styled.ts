import {
  Button,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
  Link,
  styled,
} from '@mui/material';
import {
  grayDark,
  primaryBlue,
  primaryGray,
  primaryWhite,
  grayExtraLight,
  grayLightest,
} from '../../../theme';

const StyledLabel = styled(InputLabel)`
  box-sizing: border-box;
  color: ${primaryGray};
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
  text-transform: uppercase;
`;

const StyledInput = styled(TextField)`
  box-sizing: border-box;
  color: ${grayDark};
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  border-radius: 8px;
  border: 1px solid (${grayLightest}, #f0f1f7);
  background: (${grayExtraLight}, #fcfdfe);
  margin-top: 6px;
  margin-bottom: 24px;
`;
const StyledOutlinedInput = styled(OutlinedInput)`
  box-sizing: border-box;
  color: ${grayDark};
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  border-radius: 8px;
  border: 1px solid ${grayLightest};
  background: ${grayExtraLight};
  margin-top: 6px;
  margin-bottom: 24px;
`;
const StyledLoginButton = styled(Button)`
  background-color: ${primaryBlue};
  color: ${primaryWhite};
  box-sizing: border-box;
  text-align: center;
  font-family: Mulish !important;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px 0px rgba(55, 81, 255, 0.24);
  height: 48px;
`;
const FlexContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const StyledFooterText = styled(Typography)`
  color: ${primaryGray};
  text-align: center;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin-right: 5px;
`;

const StyledSignUpLink = styled(Link)`
  box-sizing: border-box;
  color: ${primaryBlue};
  text-align: center;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
`;
export {
  StyledLabel,
  StyledInput,
  StyledLoginButton,
  StyledOutlinedInput,
  StyledFooterText,
  StyledSignUpLink,
  FlexContainer,
};
