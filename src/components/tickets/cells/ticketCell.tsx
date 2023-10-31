import { Box } from '@mui/material';
import avatarPlaceholder from '../../../assets/images/user.png';
import { updatedDifference } from '../../../utils/dateFunctions';
import { StyledHeading, StyledStack, StyledText, UserPhoto } from '../styled';
interface IProps {
  ticketName: string;
  updatedDate: string;
}
export const TicketCell = ({ ticketName, updatedDate }: IProps) => {
  return (
    <StyledStack>
      <UserPhoto src={avatarPlaceholder} alt='userPhoto' />
      <Box>
        <StyledHeading>{ticketName}</StyledHeading>
        <Box>
          <StyledText>{updatedDifference(updatedDate)}</StyledText>
        </Box>
      </Box>
    </StyledStack>
  );
};
