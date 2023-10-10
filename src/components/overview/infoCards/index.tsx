import { cardsData } from './helper';
import { BoxContainer, HeadingText, StyledBox, StyledTypography } from './styled';

const InfoCards = () => {
  return (
    <BoxContainer>
      {cardsData.map(({ heading, value }) => {
        return (
          <StyledBox key={heading}>
            <HeadingText>{heading}</HeadingText>
            <StyledTypography>{value}</StyledTypography>
          </StyledBox>
        );
      })}
    </BoxContainer>
  );
};

export default InfoCards;
