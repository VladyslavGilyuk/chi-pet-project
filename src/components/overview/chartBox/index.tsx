import Chart from '../chart';
import { additionalData } from './helper';
import { format } from 'date-fns';
import {
  AdditionalInfoContainer,
  ChartContainer,
  Container,
  DateContainer,
  HeaderContainer,
  HeadingText,
  LegendContainer,
  StyledBox,
  StyledDate,
  StyledHeader,
  StyledLegend,
  StyledTypography,
  TodayHr,
  YesterdayHr,
} from './styled';

const ChartBox = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "'as of' dd MMM yyyy, hh:mm a");

  return (
    <Container>
      <ChartContainer>
        <HeaderContainer>
          <StyledHeader>Today’s trends</StyledHeader>
          <DateContainer>
            <StyledDate>{formattedDate}</StyledDate>
            <LegendContainer>
              <TodayHr />
              <StyledLegend>Today</StyledLegend>
              <YesterdayHr />
              <StyledLegend>Yesterday</StyledLegend>
            </LegendContainer>
          </DateContainer>
        </HeaderContainer>
        <Chart />
      </ChartContainer>
      <AdditionalInfoContainer>
        {additionalData.map(({ heading, value }, index) => {
          return (
            <StyledBox key={heading} last={index === additionalData.length - 1 ? 'true' : ''}>
              <HeadingText>{heading}</HeadingText>
              <StyledTypography>{value}</StyledTypography>
            </StyledBox>
          );
        })}
      </AdditionalInfoContainer>
    </Container>
  );
};

export default ChartBox;
