import { Box, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const BoxContainer = styled(Box)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBox = styled(Box)`
  cursor: pointer;
  width: 250px;
  box-sizing: border-box;
  background-color: ${colors.primaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 32px;
  border: 1px solid ${colors.grayDivider};
  border-radius: 8px;
  &:hover {
    border: 1px solid ${colors.primaryBlue};
    & p {
      color: ${colors.primaryBlue} !important;
    }
  }
`;
const HeadingText = styled(Typography)`
  color: ${colors.primaryGray};
  font-size: 19px;
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: ${fonts.spacing.large};
  &:hover,
  &:focus {
    p: {
      color: ${colors.primaryBlue};
    }
  }
`;
const StyledTypography = styled(Typography)`
  color: ${colors.primaryBlack};
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: ${fonts.weight.large};
  line-height: normal;
  letter-spacing: 1px;
  &:hover,
  &:focus {
    p: {
      color: ${colors.primaryBlue};
    }
  }
`;
export { StyledBox, BoxContainer, StyledTypography, HeadingText };
