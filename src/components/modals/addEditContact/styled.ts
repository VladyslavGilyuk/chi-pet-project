import { Box } from '@mui/material';
import { colors } from '../../../theme';
import { styled } from '@mui/material/styles';

const BoxContainer = styled(Box)`
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  background: ${colors.primaryWhite};
  color: black;
  z-index: 10;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 32px 32px 40px 32px;
`;
const HeadingContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.primaryWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0px 8px 32px;
  border-radius: 8px;
`;
export { BoxContainer, HeadingContainer };
