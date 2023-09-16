import { colors } from '../../theme';
import { Box, styled } from '@mui/material';

const FormWrapper = styled(Box)`
  box-sizing: border-box;
  width: 380px;
  margin: 0 auto;
  margin-top: 140px;
  background-color: ${colors.primaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 32px;
  border-radius: 8px;
  border: 1px solid ${colors.grayDivider};
  background: ${colors.primaryWhite};
`;

export { FormWrapper };
