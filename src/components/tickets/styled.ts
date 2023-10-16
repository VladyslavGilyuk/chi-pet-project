import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledStack = styled(Box)`
  display: flex;
  gap: 24px;
`;
const UserPhoto = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export { UserPhoto, StyledStack };
