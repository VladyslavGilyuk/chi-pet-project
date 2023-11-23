import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { CustomSelect, StyledMenuItem } from '../styled';
interface IProps {
  id: string;
  apiUrl: string;
  handleUpdateItem: (id: string) => void;
  handleRemoveItem: (id: string, apiUrl: string) => void;
}
const ActionCell = ({ id, handleUpdateItem, handleRemoveItem, apiUrl }: IProps) => {
  return (
    <Stack>
      <CustomSelect data-testid='custom_select' IconComponent={MoreVertIcon}>
        <StyledMenuItem data-testid={`edit_button`} onClick={() => handleUpdateItem(id)}>
          Edit
        </StyledMenuItem>
        <StyledMenuItem data-testid='delete_button' onClick={() => handleRemoveItem(id, apiUrl)}>
          Delete
        </StyledMenuItem>
      </CustomSelect>
    </Stack>
  );
};

export default memo(ActionCell);
