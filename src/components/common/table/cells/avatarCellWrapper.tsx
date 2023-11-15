import React from 'react';
import avatarPlaceholder from '../../../../assets/images/user.png';
import { StyledStack, UserPhoto } from '../styled';

interface IProps {
  children: React.ReactNode;
}

export const AvatarCellWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <StyledStack>
      <UserPhoto data-testid='user_photo' src={avatarPlaceholder} alt='userPhoto' />
      {children}
    </StyledStack>
  );
};
