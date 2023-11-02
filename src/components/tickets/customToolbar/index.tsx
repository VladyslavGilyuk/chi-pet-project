import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import TicketsModal from '../../modals/tickets';
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
import { priorityOptions, sortingOptions } from './helper';

export type IProps = {
  selectedPriorities: string[];
  setSelectedPriorities: React.Dispatch<React.SetStateAction<string[]>>;
};

const CustomToolbar: React.FC<IProps> = ({ selectedPriorities, setSelectedPriorities }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
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
        <FormControl>
          <StyledInputLabel shrink={false}>Filter</StyledInputLabel>
          <FilterSelect IconComponent={StyledFilterAltIcon} value='' label='Priority'>
            {priorityOptions.map((option) => (
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
      </SelectsContainer>
      <ViewButton onClick={toggleModal}>
        <PlusSpan>
          <PlusIcon />
        </PlusSpan>{' '}
        Add Ticket
      </ViewButton>
      {isModalOpen && (
        <>
          <TicketsModal toggleModal={toggleModal} initialValues={null} />
        </>
      )}
    </StyledGridToolbarContainer>
  );
};

export default memo(CustomToolbar);
