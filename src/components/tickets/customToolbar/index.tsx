import { SubmitHandler } from 'react-hook-form';
import TicketsModal from '../../modals/tickets';
import { createTicketAsync } from '../../../store/tickets/thunk';
import { Checkbox, FormControl, FormControlLabel, MenuItem } from '@mui/material';
import { CustomToolbarProps, ITickets } from '../../../types/tickets';
import {
  FilterInputLabel,
  FilterSelect,
  FilterSubSelect,
  PlusSpan,
  SelectsContainer,
  SortSelect,
  StyledFilterAltIcon,
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
  const handleCreateTicket: SubmitHandler<ITickets> = async (data: ITickets) => {
    const body = { ...data };
    await dispatch(createTicketAsync(body));
    fetchTickets();
    toggleModal();
  };

  const handleSort = async (option: string) => {
    const [field, order] = option.split('-');
    setSearchParams((params) => {
      params.set('_sort', field);
      params.set('_order', order);

      return params;
    });
  };

  const handleLast7Filter = async () => {
    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    setSearchParams((params) => {
      params.set('createDate_gte', sevenDaysAgo.toISOString());
      params.set('createDate_lte', today.toISOString());

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
            <MenuItem>
              <FormControl>
                <FilterInputLabel shrink={false}>Priority</FilterInputLabel>
                <FilterSubSelect
                  MenuProps={{
                    anchorOrigin: { vertical: 'center', horizontal: 'right' },
                    transformOrigin: { vertical: 'center', horizontal: -16 },
                  }}
                  inputProps={{
                    IconComponent: () => null,
                  }}
                >
                  {priorityOptions.map((option) => (
                    <FormControlLabel
                      key={option}
                      control={
                        <Checkbox
                          checked={selectedPriorities.includes(option)}
                          onChange={() => handlePriorityFilter(option)}
                        />
                      }
                      label={option}
                    />
                  ))}
                </FilterSubSelect>
              </FormControl>
            </MenuItem>
            <MenuItem>
              <FormControl>
                <FilterInputLabel shrink={false}>Time</FilterInputLabel>
                <FilterSubSelect
                  MenuProps={{
                    anchorOrigin: { vertical: 'center', horizontal: 'right' },
                    transformOrigin: { vertical: 'center', horizontal: -16 },
                  }}
                  value=''
                  onChange={() => handleLast7Filter()}
                  inputProps={{
                    IconComponent: () => null,
                  }}
                >
                  <MenuItem value={'7days'}>Last 7 days</MenuItem>
                </FilterSubSelect>
              </FormControl>
            </MenuItem>
          </FilterSelect>
        </FormControl>
      </SelectsContainer>
      <ViewButton onClick={toggleModal}>
        <PlusSpan>+</PlusSpan> Add Ticket
      </ViewButton>
      {isModalOpen && (
        <>
          <TicketsModal
            toggleModal={toggleModal}
            handleForm={handleCreateTicket}
            refetchTickets={fetchTickets}
            initialValues={null}
          />
        </>
      )}
    </StyledGridToolbarContainer>
  );
};

export default CustomToolbar;
