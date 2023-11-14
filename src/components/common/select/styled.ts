import { InputLabel, MenuItem, Select, Typography, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const StyledTicketsSelect = styled(Select)`
  width: 100%;
  color: ${colors.primaryBlack};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.3px;
  & div {
    padding: 11px;
    color: ${colors.primaryBlack};
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weight.small};
  }
`;
const StyledTasksSelect = styled(Select)`
  & div {
    width: 50px;
    padding: 8px;
  }
`;
const StyledInputLabel = styled(InputLabel)`
  color: ${colors.primaryGray};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  margin-bottom: 6px;
`;
const StyledPlaceholder = styled(Typography)`
  color: ${colors.primaryGray};
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.large};
  line-height: 20px;
`;
const StyledMenuItem = styled(MenuItem)`
  color: ${colors.primaryBlack};
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.small};
`;
export {
  StyledTicketsSelect,
  StyledTasksSelect,
  StyledInputLabel,
  StyledPlaceholder,
  StyledMenuItem,
};
