import { DataGrid } from '@mui/x-data-grid';
import { Box, MenuItem, Select, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const StyledDataGrid = styled(DataGrid)`
  && {
    & .MuiDataGrid-cell,
    & .MuiDataGrid-columnHeader {
      border-bottom: none;
    }
    & .MuiDataGrid-root,
    .MuiDataGrid-row::after {
      display: none;
    }
    & .MuiDataGrid-cell:not(:nth-last-of-type(2)),
    & .MuiDataGrid-columnHeader:not(:nth-last-of-type(2)) {
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

    & .MuiDataGrid-cell:first-of-type,
    .MuiDataGrid-columnHeader:first-of-type {
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
  }
`;

const StyledBox = styled(Box)`
  width: 100%;
  max-width: 1130px;
  margin: 0 auto;
  background-color: #fff;

  & .MuiDataGrid-row:hover {
    background-color: rgba(55, 81, 255, 0.04);
  }
`;
const StyledStack = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;
const StyledHeading = styled(Typography)`
  white-space: wrap;
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
const UserPhoto = styled('img')`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid black;
`;
const NoDataImage = styled('img')`
  display: block;
  width: 800px;
  height: 500px;
  margin: 0 auto;
`;
const CustomSelect = styled(Select)`
  width: 39px;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  width: 100%;
  display: flex;
  padding: 15px 25px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const StyledAdressText = styled(Typography)`
  white-space: wrap;
  color: #000000;
  font-size: ${fonts.size.small} !important;
  font-style: normal;
  font-weight: ${fonts.weight.small} !important;
  line-height: 16px !important;
  letter-spacing: 0.1px;
`;

const StyledSpinnerBox = styled(Box)`
  margin-top: 350px;
`;
export {
  UserPhoto,
  StyledStack,
  StyledDataGrid,
  StyledHeading,
  StyledText,
  StyledBox,
  CustomSelect,
  StyledMenuItem,
  StyledAdressText,
  NoDataImage,
  StyledSpinnerBox,
};
