import { CustomToolbarProps } from '../../../types/tickets';
import TicketsModal from '../../modals/tickets';
import { memo } from 'react';
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
import { priorityOptions, sortingOptions } from './helper';

const CustomToolbar: React.FC<CustomToolbarProps> = ({
  dispatch,
  fetchTickets,
  toggleModal,
  setSearchParams,
  selectedPriorities,
  setSelectedPriorities,
  isModalOpen,
}) => {
  const handleSort = async (option: string) => {
    const [field, order] = option.split('-');
    setSearchParams((params) => {
      params.set('_sort', field);
      params.set('_order', order);

      return params;
    });
  };

  const handlePriorityFilter = async (priority: string) => {
    setSelectedPriorities((prev) =>
      prev.includes(priority) ? prev.filter((p) => p !== priority) : [...prev, priority],
    );
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
        <PlusSpan>+</PlusSpan> Add Ticket
      </ViewButton>
      {isModalOpen && (
        <>
          <TicketsModal
            dispatch={dispatch}
            toggleModal={toggleModal}
            refetchTickets={fetchTickets}
            initialValues={null}
          />
        </>
      )}
    </StyledGridToolbarContainer>
  );
};

export default memo(CustomToolbar);
