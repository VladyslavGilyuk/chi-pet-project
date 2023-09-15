import { InputLabel, TextField, styled } from '@mui/material';

import { grayDark, grayExtraLight, grayLightest, primaryGray } from '../../../theme';

const StyledLabel = styled(InputLabel)`
  width: 100%;
  box-sizing: border-box;
  color: ${primaryGray};

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
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  border-radius: 8px;
  border: 1px solid (${grayLightest}, #f0f1f7);
  background: (${grayExtraLight}, #fcfdfe);
  margin-top: 5px;
  margin-bottom: 5px;
  & .MuiTextField-root {
    margin-bottom: 0;
  }
`;

export { StyledInput, StyledLabel };
