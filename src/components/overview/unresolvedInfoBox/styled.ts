import { Box, Button, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const Container = styled(Box)`
  width: 100%;
  background-color: ${colors.primaryWhite};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding-bottom: 8px;
  border: 1px solid ${colors.grayDivider};
`;
const HeadingContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.primaryWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 32px 32px 8px 32px;
`;
const StyledButton = styled(Button)`
  color: ${colors.primaryBlue};
  text-align: right;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.medium};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  text-transform: none;
`;

const HeadingText = styled(Typography)`
  color: ${colors.primaryBlack};
  font-size: 19px;
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: ${fonts.spacing.large};
`;
const GroupContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  padding: 0 32px;
`;
const Group = styled(Typography)`
  color: ${colors.primaryGray};
  font-size: ${fonts.size.small};
  font-style: normal;
  font-weight: ${fonts.weight.small};
  line-height: 16px;
  letter-spacing: 0.1px;
`;
const GroupName = styled(Typography)`
  color: ${colors.grayDark};
  font-size: ${fonts.size.small};
  font-style: normal;
  font-weight: ${fonts.weight.small};
  line-height: 16px;
  letter-spacing: 0.1px;
`;
const MainInfoContainer = styled(Box)`
  width: 100%;
`;
const TicketsContainer = styled(Box)`
  box-sizing: border-box;
  width: 100%;
  background-color: ${colors.primaryWhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 32px;
  border-radius: 8px;
`;
const StatusName = styled(Typography)`
  color: ${colors.primaryBlack};
  font-size: ${fonts.size.medium};
  font-style: normal;
  font-weight: ${fonts.weight.medium};
  line-height: 20px;
  letter-spacing: ${fonts.spacing.small};
`;
const Value = styled(Typography)`
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
const StyledHr = styled('hr')`
  width: 100%;
  height: 1px;
  background-color: ${colors.grayDivider};
  border: none;
`;
export {
  Container,
  HeadingContainer,
  GroupContainer,
  Group,
  GroupName,
  MainInfoContainer,
  TicketsContainer,
  Value,
  HeadingText,
  StatusName,
  StyledButton,
  StyledHr,
};
