import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import { colors, fonts } from '../../theme';

const StyledDataGrid = styled(DataGrid)`
  && {
    & .MuiDataGrid-cell,
    & .MuiDataGrid-columnHeader {
      padding-left: 32px;
      padding-right: 32px;
    }
    & .MuiDataGrid-columnHeaderTitle {
      color: ${colors.primaryGray};
      font-size: ${fonts.size.medium};
      font-style: normal;
      font-weight: ${fonts.weight.large};
      line-height: normal;
      letter-spacing: ${fonts.spacing.small};
    }
    .MuiDataGrid-root {
      font-weight: ${fonts.weight.large};
    }
  }
`;
const StyledStack = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const StyledHeading = styled(Typography)`
  color: ${colors.primaryBlack};
  font-size: ${fonts.size.medium} !important;
  font-style: normal;
  font-weight: ${fonts.weight.medium} !important;
  line-height: 20px !important;
  letter-spacing: ${fonts.spacing.small};
`;
const StyledText = styled(Typography)`
  color: ${colors.grayLight};
  font-size: ${fonts.size.small} !important;
  font-style: normal;
  font-weight: ${fonts.weight.small} !important;
  line-height: 16px !important;
  letter-spacing: 0.1px;
  margin-top: 4px !important;
`;
const UserPhoto = styled.img`
  // correct this img to MUI ?
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;

export { UserPhoto, StyledStack, StyledDataGrid, StyledHeading, StyledText };
