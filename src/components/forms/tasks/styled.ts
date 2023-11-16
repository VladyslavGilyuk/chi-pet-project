import CustomSelect from '../../common/select';
import { Box, Button, TextField, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const Form = styled('form')`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 32px 10px 32px;
  & .MuiSelect-root {
    background-color: red;
    padding: 8px !important;
  }
`;
const StyledCustomSelect = styled(CustomSelect)`
  & .MuiSelect-root,
  & .MuiSelect-root div {
    background-color: red;
    padding: 8px !important;
  }
`;

const StyledInput = styled(TextField)`
  width: 300px;
  color: ${colors.grayLight};
  font-size: ${fonts.size.medium};
  font-style: normal;
  font-weight: ${fonts.weight.medium};
  line-height: 20px;
  letter-spacing: ${fonts.spacing.small};
  & input {
    padding: 8px;
  }
`;
const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;
const CreateButton = styled(Button)`
  color: ${colors.primaryWhite};
  text-align: right;
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.small};
  letter-spacing: ${fonts.spacing.small};
  font-style: normal;
  line-height: 20px;
  padding: 8px;
  margin-left: 5px;
`;
const StyledButton = styled(Button)`
  && {
    color: red;
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weight.medium};
    letter-spacing: ${fonts.spacing.small};
    font-style: normal;
    text-transform: none;
    background: none;
    min-width: 8px;
  }
`;

export { CreateButton, Form, StyledInput, StyledBox, StyledButton, StyledCustomSelect };
