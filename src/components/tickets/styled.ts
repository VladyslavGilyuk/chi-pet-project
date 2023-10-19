import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';
import { colors, fonts } from '../../theme';

const StyledDataGrid = styled(DataGrid)`
  && {
    & .MuiDataGrid-cell,
    & .MuiDataGrid-columnHeader {
      border-bottom: none;
    }
    & .MuiDataGrid-cell:not(:last-child):not(:nth-last-child(2)),
    & .MuiDataGrid-columnHeader:not(:last-child):not(:nth-last-child(2)) {
      margin-right: 40px;
      padding-right: 0;
    }
    .MuiDataGrid-root .MuiDataGrid-columnHeaderDraggableContainer {
      border: none;
    }
    & .MuiDataGrid-columnSeparator--sideRight {
      display: none !important;
    }

    & .MuiDataGrid-columnHeader:focus,
    .MuiDataGrid-cell:focus,
    .MuiDataGrid-columnHeader:focus-within,
    .MuiDataGrid-cell:focus-within {
      outline: none;
    }

    & .MuiDataGrid-cell:first-child,
    .MuiDataGrid-columnHeader:first-child {
      padding-left: 32px;
    }
    & .MuiDataGrid-cell:last-child,
    &.MuiDataGrid-columnHeader:last-child {
      padding-right: 32px;
      margin-right: 0;
    }

    & .MuiDataGrid-row {
      border-bottom: 1px solid #dfe0eb;
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
    & .MuiTablePagination-selectLabel,
    & .MuiTablePagination-displayedRows {
      color: ${colors.primaryGray};
      font-size: ${fonts.size.medium};
      font-style: normal;
      font-weight: ${fonts.weight.small};
      line-height: 20px;
      letter-spacing: ${fonts.spacing.medium};
    }
    .MuiSelect-select.MuiSelect-select {
      color: ${colors.grayDark};
      text-align: right;
      font-size: ${fonts.size.medium};
      font-style: normal;
      font-weight: ${fonts.weight.small};
      line-height: 20px;
      letter-spacing: ${fonts.spacing.medium};
    }
    & .MuiDataGrid-row {
      &::after {
        content: '...';
        display: inline-block;
        width: 100%;
        text-align: center;
        color: ${colors.primaryGray};
        font-size: ${fonts.size.medium};
        font-style: normal;
        font-weight: ${fonts.weight.large};
        line-height: normal;
        letter-spacing: ${fonts.spacing.small};
      }
    }
  }
`;
const ViewButton = styled(Button)`
  color: ${colors.primaryBlue};
  text-align: right;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.medium};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  text-transform: none;
`;
const StyledBox = styled(Box)`
  width: 1200px;
  margin: 0 auto;
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

export { UserPhoto, StyledStack, StyledDataGrid, StyledHeading, StyledText, StyledBox, ViewButton };
