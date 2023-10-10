import { colors } from '../../../theme';
import { Box, styled } from '@mui/material';

const BoxContainer = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 380px;
  height: 500px;
  background: ${colors.primaryWhite};
  color: black;
  z-index: 10;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  overflow-x: hidden;
  overflow-y: auto;
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
