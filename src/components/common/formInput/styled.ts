import { Box, InputLabel, TextField, styled } from '@mui/material';
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
  font-style: normal;
  line-height: normal;
  text-transform: uppercase;
`;

const StyledInput = styled(TextField)`
  border-radius: 8px;
  border: 1px solid (${colors.grayLightest}, #f0f1f7);
  margin-top: 5px;
  margin-bottom: 5px;

  & div {
    box-sizing: border-box;
    color: ${colors.grayDark};
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weight.small};
    letter-spacing: ${fonts.spacing.medium};
    font-style: normal;
    line-height: 20px;
    background: (${colors.grayExtraLight}, #fcfdfe);
  }
  & input {
    color: ${colors.primaryBlack};
  }
`;

export { FormInputWrapper, StyledInput, StyledLabel };
