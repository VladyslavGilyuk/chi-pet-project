import { Stack } from '@mui/material';
import { StyledHeading, StyledText } from '../styled';

interface IProps {
  primaryText: string;
  secondaryText: string;
}
export const DefaultCell = ({ primaryText, secondaryText }: IProps) => {
  return (
    <Stack>
      <StyledHeading>{primaryText}</StyledHeading>
      <StyledText>{secondaryText}</StyledText>
    </Stack>
  );
};
