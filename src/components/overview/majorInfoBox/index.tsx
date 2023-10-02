import { BoxContainer, HeadingText, StyledBox, StyledTypography } from './styled';

const MajorInfoBox = () => {
  return (
    <>
      <BoxContainer>
        <StyledBox>
          <HeadingText>Unresolved</HeadingText>
          <StyledTypography>60</StyledTypography>
        </StyledBox>
        <StyledBox>
          <HeadingText>Overdue</HeadingText>
          <StyledTypography>16</StyledTypography>
        </StyledBox>
        <StyledBox>
          <HeadingText>Open</HeadingText>
          <StyledTypography>43</StyledTypography>
        </StyledBox>
        <StyledBox>
          <HeadingText>On hold</HeadingText>
          <StyledTypography>64</StyledTypography>
        </StyledBox>
      </BoxContainer>
    </>
  );
};

export default MajorInfoBox;
