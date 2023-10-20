import { colors } from '../../theme';
import { Container, styled } from '@mui/material';

const FormContainer = styled(Container)`
  box-sizing: border-box;
  width: 380px;
  margin: 0 auto;
  padding: 140px;
  background-color: ${colors.primaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 32px;
  border-radius: 8px;
`;
const Wrapper = styled('div')`
  min-height: 100vh;
  background-color: ${colors.grayBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export { FormContainer, Wrapper };
