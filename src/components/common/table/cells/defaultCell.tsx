import { Stack } from '@mui/material';
import { StyledAdressText, StyledHeading, StyledText } from '../styled';

interface IProps {
  primaryText?: string;
  secondaryText?: string;
  adressText?: string;
}
export const DefaultCell = ({ primaryText, secondaryText, adressText }: IProps) => {
  return (
    <Stack>
      <StyledHeading>{primaryText}</StyledHeading>
      <StyledText>{secondaryText}</StyledText>
      <StyledAdressText>{adressText}</StyledAdressText>
    </Stack>
  );
};
