import { cardsData } from './helper';
import { BoxContainer, HeadingText, StyledBox, StyledTypography } from './styled';

const InfoCards = () => {
  return (
    <BoxContainer>
      {cardsData.map((data) => {
        return (
          <StyledBox key={data.heading}>
            <HeadingText>{data.heading}</HeadingText>
            <StyledTypography>{data.value}</StyledTypography>
          </StyledBox>
        );
      })}
    </BoxContainer>
  );
};

export default InfoCards;
