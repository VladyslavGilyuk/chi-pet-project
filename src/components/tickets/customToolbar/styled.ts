import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { GridToolbarContainer } from '@mui/x-data-grid';
import SortIcon from '@mui/icons-material/Sort';
import { Box, Button, InputLabel, Select, styled } from '@mui/material';

import { colors, fonts } from '../../../theme';

const ViewButton = styled(Button)`
  color: ${colors.primaryBlue};
  text-align: right;
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.medium};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  text-transform: none;
  margin-right: 32px;
`;

const StyledInputLabel = styled(InputLabel)`
  margin-left: 12px;
`;
const SortSelect = styled(Select)`
  width: 90px;
  margin-right: 20px;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiSelect-icon {
    right: unset;
  }
`;
const FilterSelect = styled(Select)`
  width: 90px;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  .MuiSelect-icon {
    right: unset;
  }
`;
const FilterInputLabel = styled(InputLabel)`
  margin-top: -7px;
`;
const FilterSubSelect = styled(Select)`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  & .MuiOutlinedInput-input {
    padding: 10px 15px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const StyledGridToolbarContainer = styled(GridToolbarContainer)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const SelectsContainer = styled(Box)`
  margin-left: 32px;
`;
const PlusSpan = styled('span')`
  margin-right: 6px;
`;
const StyledFilterAltIcon = styled(FilterAltIcon)`
  fill: ${colors.grayLight};
`;
const StyledSortIcon = styled(SortIcon)`
  fill: ${colors.grayLight};
`;
export {
  ViewButton,
  SortSelect,
  FilterSelect,
  StyledGridToolbarContainer,
  SelectsContainer,
  PlusSpan,
  StyledFilterAltIcon,
  StyledSortIcon,
  StyledInputLabel,
  FilterSubSelect,
  FilterInputLabel,
};
