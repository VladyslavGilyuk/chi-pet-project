import { Box, Button, styled } from '@mui/material';
import { colors, fonts } from '../../../../theme';

const BoxContainer = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  height: 500px;
  background: white;
  color: black;
  z-index: 10;
  border-radius: 16px;
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
  border-radius: 8px;
  padding: 32px 0px 20px 32px;
`;
const StyledButton = styled(Button)`
  && {
    color: red;
    text-align: right;
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weight.medium};
    letter-spacing: ${fonts.spacing.small};
    font-style: normal;
    line-height: 20px;
    text-transform: none;
    background: none;
  }
`;
export { BoxContainer, HeadingContainer, StyledButton };
