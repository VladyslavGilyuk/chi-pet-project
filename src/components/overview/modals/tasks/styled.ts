import { Box, styled } from '@mui/material';

const BoxContainer = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  background: white;
  color: black;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  overflow-x: hidden;
  overflow-y: auto;
`;
export { BoxContainer };
