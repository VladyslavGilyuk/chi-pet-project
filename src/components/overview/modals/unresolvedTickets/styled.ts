import { Box, Button, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../../theme';

const BoxContainer = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
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
const TicketsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;
  width: 100%;
  background-color: ${colors.primaryWhite};
  padding: 5px 32px 5px 32px;
  border-radius: 8px;
`;
const StatusName = styled(Typography)`
  color: ${colors.primaryBlack};
  font-size: ${fonts.size.medium};
  font-style: normal;
  font-weight: ${fonts.weight.medium};
  line-height: 20px;
  letter-spacing: ${fonts.spacing.small};
  padding: 0px 32px;
`;
const Value = styled(Typography)`
  width: 100%;
  justify-content: space-between;
  padding-left: 5px;
  display: flex;
  align-items: center;
  color: ${colors.primaryGray};
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: ${fonts.weight.medium};
  line-height: 20px;
  letter-spacing: ${fonts.spacing.small};
`;
export { BoxContainer, HeadingContainer, TicketsContainer, StyledButton, Value, StatusName };
