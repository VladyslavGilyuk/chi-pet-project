import CustomModal from '../../../modals/customModal';
import { ISortingOptions } from '..';
import { ReactComponent as PlusIcon } from '../../../../assets/plus.svg';
import { useSearchParams } from 'react-router-dom';
import { Checkbox, FormControl, MenuItem } from '@mui/material';
import {
  FilterSelect,
  PlusSpan,
  SelectsContainer,
  SortSelect,
  StyledFilterAltIcon,
  StyledFormControlLabel,
  StyledGridToolbarContainer,
  StyledInputLabel,
  StyledSortIcon,
  ViewButton,
} from './styled';
import { memo, useCallback, useState } from 'react';

export type IProps = {
  apiUrl: string;
  selectedPriorities: string[];
  setSelectedPriorities: React.Dispatch<React.SetStateAction<string[]>>;
  sortingOptions: ISortingOptions[];
  disabledFilter?: boolean;
  priorityOptions?: string[];
  contactsForm?: boolean;
};

const CustomToolbar: React.FC<IProps> = ({
  apiUrl,
  selectedPriorities,
  setSelectedPriorities,
  disabledFilter,
  sortingOptions,
  priorityOptions,
  contactsForm,
}) => {
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

  const handlePriorityFilter = (priority: string) => {
    setSelectedPriorities((prev) => {
      if (prev.includes(priority)) {
        const newPriorities = prev.filter((p) => p !== priority);

        setSearchParams((params) => {
          params.delete('priority');
          newPriorities.forEach((p) => {
            params.append('priority', p);
          });

          return params;
        });

        return newPriorities;
      }

      setSearchParams((params) => {
        params.append('priority', priority);

        return params;
      });
      return [...prev, priority];
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
        {!disabledFilter ? (
          <FormControl>
            <StyledInputLabel shrink={false}>Filter</StyledInputLabel>
            <FilterSelect IconComponent={StyledFilterAltIcon} value='' label='Filter'>
              {priorityOptions?.map((option) => (
                <StyledFormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      onClick={(e) => e.stopPropagation()}
                      checked={selectedPriorities.includes(option)}
                      onChange={() => handlePriorityFilter(option)}
                    />
                  }
                  label={option}
                />
              ))}
            </FilterSelect>
          </FormControl>
        ) : null}
      </SelectsContainer>
      <ViewButton onClick={toggleModal}>
        <PlusSpan>
          <PlusIcon />
        </PlusSpan>
        Add {contactsForm ? 'Contact' : 'Ticket'}
      </ViewButton>
      {isModalOpen && (
        <>
          <CustomModal
            toggleModal={toggleModal}
            initialValues={null}
            apiUrl={apiUrl}
            isOpen={isModalOpen}
            contactsForm={contactsForm}
          />
        </>
      )}
    </StyledGridToolbarContainer>
  );
};

export default memo(CustomToolbar);
