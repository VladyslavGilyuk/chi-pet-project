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
      <StyledHeading data-testid={`heading_${primaryText}`}>{primaryText}</StyledHeading>
      <StyledText data-testid='text'>{secondaryText}</StyledText>
      <StyledAdressText data-testid='address'>{adressText}</StyledAdressText>
    </Stack>
  );
};
