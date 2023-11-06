import ContactsModal from '../../../modals/contacts';
import { ReactComponent as PlusIcon } from '../../../../assets/plus.svg';
import { sortingOptions } from './helper';
import { useSearchParams } from 'react-router-dom';
import { FormControl, MenuItem } from '@mui/material';
import {
  PlusSpan,
  SelectsContainer,
  SortSelect,
  StyledGridToolbarContainer,
  StyledInputLabel,
  StyledSortIcon,
  ViewButton,
} from './styled';

import { memo, useCallback, useState } from 'react';

export type IProps = {
  apiUrl: string;
};

const CustomToolbar: React.FC<IProps> = ({ apiUrl }) => {
  const [searchParams, setSearchParams] = useSearchParams(); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleSort = (option: string) => {
    const [field, order] = option.split('-');
    setSearchParams((params) => {
      params.set('_sort', field);
      params.set('_order', order);

      return params;
    });
  };

  return (
    <StyledGridToolbarContainer>
      <SelectsContainer>
        <FormControl>
          <StyledInputLabel shrink={false}>Sort</StyledInputLabel>
          <SortSelect
            IconComponent={StyledSortIcon}
            label='Sort'
            value=''
            onChange={(e) => handleSort(e.target.value as string)}
          >
            {sortingOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SortSelect>
        </FormControl>
      </SelectsContainer>
      <ViewButton onClick={toggleModal}>
        <PlusSpan>
          <PlusIcon />
        </PlusSpan>
        Add Contact
      </ViewButton>
      {isModalOpen && (
        <>
          <ContactsModal
            toggleModal={toggleModal}
            initialValues={null}
            apiUrl={apiUrl}
            isOpen={isModalOpen}
          />
        </>
      )}
    </StyledGridToolbarContainer>
  );
};

export default memo(CustomToolbar);
