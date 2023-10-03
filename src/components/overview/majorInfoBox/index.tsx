import { majorData } from './helper';
import { BoxContainer, HeadingText, StyledBox, StyledTypography } from './styled';

const MajorInfoBox = () => {
  return (
    <>
      <BoxContainer>
        {majorData.map((data) => {
          return (
            <StyledBox key={data.heading}>
              <HeadingText>{data.heading}</HeadingText>
              <StyledTypography>{data.value}</StyledTypography>
            </StyledBox>
          );
        })}
      </BoxContainer>
    </>
  );
};

export default MajorInfoBox;
