import { Button, InputLabel, TextField, styled } from '@mui/material';
import { grayDark, grayExtraLight, primaryBlue, primaryGray, primaryWhite } from '../../../theme';

const StyledLabel = styled(InputLabel)`
  box-sizing: border-box;
  background-color: ${grayExtraLight};
  color: ${primaryGray};
  font-size: 12px;
`;
const StyledInput = styled(TextField)`
  box-sizing: border-box;
  margin-top: 6px;
  background-color: ${grayExtraLight};
  color: ${grayDark};
  font-size: 14px;
`;
const StyledButton = styled(Button)`
  box-sizing: border-box;
  background-color: ${primaryBlue};
  color: ${primaryWhite};
  font-size: 14px;
`;

export { StyledLabel, StyledInput, StyledButton };
