import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Stack } from '@mui/material';
import { CustomSelect, StyledMenuItem } from '../styled';

interface IProps {
  id: string;
  toggleUpdateModal: (id: string) => void;
  handleDeleteClick: (id: string) => void;
}
export const MenuCell = ({ id, toggleUpdateModal, handleDeleteClick }: IProps) => {
  return (
    <Stack>
      <CustomSelect IconComponent={MoreVertIcon}>
        <StyledMenuItem onClick={() => toggleUpdateModal(id)}>Edit</StyledMenuItem>
        <StyledMenuItem onClick={() => handleDeleteClick(id)}>Delete</StyledMenuItem>
      </CustomSelect>
    </Stack>
  );
};
