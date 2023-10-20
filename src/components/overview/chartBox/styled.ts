import { Box, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const Container = styled(Box)`
  width: 100%;
  background-color: ${colors.primaryWhite};
  box-sizing: border-box;
  display: flex;
  margin: 30px 0;
`;
const ChartContainer = styled(Box)`
  width: 67%;
  padding: 32px;
`;
const DateContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 54px;
`;
const StyledHeader = styled(Typography)`
  color: ${colors.primaryBlack};
  font-size: 19px;
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: ${fonts.spacing.large};
`;
const StyledDate = styled(Typography)`
  color: ${colors.primaryGray};
  font-size: ${fonts.size.small};
  font-style: normal;
  font-weight: ${fonts.weight.small};
  line-height: 16px;
  letter-spacing: 0.1px;
`;
const LegendContainer = styled(Box)`
  display: flex;
  align-items: center;
`;
const TodayHr = styled('hr')`
  width: 16px;
  height: 2px;
  background-color: ${colors.primaryBlue};
  border: none;
`;
const YesterdayHr = styled('hr')`
  width: 16px;
  height: 2px;
  margin-left: 32px;
  background-color: ${colors.grayDivider};
  border: none;
`;
const StyledLegend = styled(Typography)`
  color: ${colors.primaryGray};
  font-weight: ${fonts.weight.medium};
  font-size: 12px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.1px;
  margin-left: 8px;
`;

const AdditionalInfoContainer = styled(Box)`
  width: 33%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid ${colors.grayDivider};
  padding: 8px 0px 8px 0px;
`;
const StyledBox = styled(Box)<{ last: string }>`
  width: 100%;
  padding: 24px 0px 24px 0px;
  border-bottom: ${(props) => (props.last === 'true' ? 'none' : `1px solid ${colors.grayDivider}`)};
`;
const HeadingText = styled(Typography)`
  color: ${colors.primaryGray};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: ${fonts.weight.medium};
  line-height: 22px;
  letter-spacing: ${fonts.spacing.medium};
  margin-bottom: 6px;
`;

const StyledTypography = styled(Typography)`
  color: ${colors.primaryBlack};
  text-align: center;
  font-size: ${fonts.size.large};
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: ${fonts.spacing.medium};
`;
export {
  AdditionalInfoContainer,
  ChartContainer,
  StyledBox,
  StyledHeader,
  Container,
  TodayHr,
  YesterdayHr,
  StyledLegend,
  DateContainer,
  StyledDate,
  LegendContainer,
  StyledTypography,
  HeadingText,
};
