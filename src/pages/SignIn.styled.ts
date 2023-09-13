import { Box, styled } from '@mui/material';
import { grayDivider, primaryWhite } from '../theme';

const FormWrapper = styled(Box)`
  box-sizing: border-box;
  width: 380px;
  margin: 0 auto;
  margin-top: 140px;
  background-color: ${primaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 32px;
  border-radius: 8px;
  border: 1px solid ${grayDivider};
  background: ${primaryWhite};
`;

export { FormWrapper };
