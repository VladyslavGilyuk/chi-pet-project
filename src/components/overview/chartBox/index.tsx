import Chart from '../chart';
import { additionalData } from './helper';
import { formatAsOfDate } from '../../../utils/dateFunctions';
import {
  AdditionalInfoContainer,
  ChartContainer,
  Container,
  DateContainer,
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
  const date = formatAsOfDate(new Date());

  return (
    <Container>
      <ChartContainer>
        <StyledHeader>Today’s trends</StyledHeader>
        <DateContainer>
          <StyledDate>{date}</StyledDate>
          <LegendContainer>
            <TodayHr />
            <StyledLegend>Today</StyledLegend>
            <YesterdayHr />
            <StyledLegend>Yesterday</StyledLegend>
          </LegendContainer>
        </DateContainer>
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
