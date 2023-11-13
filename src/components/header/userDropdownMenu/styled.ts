import { MenuButton } from '@mui/base/MenuButton';
import { Button, styled } from '@mui/material';
import { colors, fonts } from '../../../theme';

const StyledMenuButton = styled(MenuButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid ${colors.grayDivider};
  padding: 2px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  svg {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;
const StyledButton = styled(Button)`
  color: ${colors.primaryRed};
  background-color: ${colors.grayLightest};
  font-weight: ${fonts.weight.medium};
`;

const Listbox = styled('ul')(`
  list-style-type: none;
  padding: 0;
  margin: 1px;
  `);
export { StyledButton, StyledMenuButton, Listbox };
