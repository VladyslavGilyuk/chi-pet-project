import { InputLabel, TextField, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

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
  box-sizing: border-box;
  color: ${colors.grayDark};
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.medium};
  line-height: 20px;
  font-style: normal;
  border-radius: 8px;
  border: 1px solid ${colors.grayLightest};
  background: ${colors.grayExtraLight};
  margin-top: 5px;
  margin-bottom: 5px;
`;

export { StyledInput, StyledLabel };
