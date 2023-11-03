import React from 'react';
import avatarPlaceholder from '../../../../assets/images/user.png';
import { StyledStack, UserPhoto } from '../styled';

interface TicketCellProps {
  children: React.ReactNode;
}

export const TicketCell: React.FC<TicketCellProps> = ({ children }) => {
  return (
    <StyledStack>
      <UserPhoto src={avatarPlaceholder} alt='userPhoto' />
      {children}
    </StyledStack>
  );
};
