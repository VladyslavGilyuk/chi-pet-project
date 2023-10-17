import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const StyledDataGrid = styled(DataGrid)`
  && {
    & .MuiDataGrid-row,
    & .MuiDataGrid-columnHeader {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;
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

export { UserPhoto, StyledStack, StyledDataGrid };
