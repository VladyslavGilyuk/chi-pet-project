import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { CustomSelect, StyledMenuItem } from '../styled';

interface IProps {
  id: string;
  handleUpdateItem: (id: string) => void;
  handleRemoveItem: (id: string) => void;
}
const MenuCell = ({ id, handleUpdateItem, handleRemoveItem }: IProps) => {
  return (
    <Stack>
      <CustomSelect IconComponent={MoreVertIcon}>
        <StyledMenuItem onClick={() => handleUpdateItem(id)}>Edit</StyledMenuItem>
        <StyledMenuItem onClick={() => handleRemoveItem(id)}>Delete</StyledMenuItem>
      </CustomSelect>
    </Stack>
  );
};

export default memo(MenuCell);
