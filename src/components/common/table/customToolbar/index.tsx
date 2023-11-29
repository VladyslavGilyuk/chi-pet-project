import AddEditContact from '../../../modals/addEditContact';
import AddEditTicket from '../../../modals/addEditTicket';
import { ReactComponent as PlusIcon } from '../../../../assets/plus.svg';
import { useSearchParams } from 'react-router-dom';
import { Checkbox, FormControl, MenuItem } from '@mui/material';
import { EFormType, ISortingOptions } from '..';
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
  formType: EFormType;
  disabledFilter?: boolean;
  priorityOptions?: string[];
};

const CustomToolbar: React.FC<IProps> = ({
  apiUrl,
  selectedPriorities,
  setSelectedPriorities,
  disabledFilter,
  sortingOptions,
  priorityOptions,
  formType,
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
    <StyledGridToolbarContainer data-testid='custom_toolbar'>
      <SelectsContainer>
        <FormControl>
          <StyledInputLabel data-testid='sort_select_heading' shrink={false}>
            Sort
          </StyledInputLabel>
          <SortSelect
            data-testid='sort_select'
            IconComponent={StyledSortIcon}
            label='Sort'
            value=''
            onChange={(e) => handleSort(e.target.value as string)}
          >
            {sortingOptions.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                data-testid={`item_${option.value}`}
              >
                {option.label}
              </MenuItem>
            ))}
          </SortSelect>
        </FormControl>
        {!disabledFilter && (
          <FormControl>
            <StyledInputLabel shrink={false} data-testid='sort_filter_heading'>
              Filter
            </StyledInputLabel>
            <FilterSelect
              data-testid='sort_filter'
              IconComponent={StyledFilterAltIcon}
              value=''
              label='Filter'
            >
              {priorityOptions?.map((option) => (
                <StyledFormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      onClick={(e) => e.stopPropagation()}
                      checked={selectedPriorities.includes(option)}
                      onChange={() => handlePriorityFilter(option)}
                      data-testid={`item_${option}`}
                    />
                  }
                  label={option}
                />
              ))}
            </FilterSelect>
          </FormControl>
        )}
      </SelectsContainer>
      <ViewButton onClick={toggleModal} data-testid='add_button'>
        <PlusSpan>
          <PlusIcon data-testid='plus_icon' />
        </PlusSpan>
        Add {formType}
      </ViewButton>
      {isModalOpen && (
        <>
          {formType === EFormType.Contacts ? (
            <AddEditContact
              toggleModal={toggleModal}
              initialValues={null}
              apiUrl={apiUrl}
              isOpen={isModalOpen}
            />
          ) : (
            <AddEditTicket
              toggleModal={toggleModal}
              initialValues={null}
              apiUrl={apiUrl}
              isOpen={isModalOpen}
            />
          )}
        </>
      )}
    </StyledGridToolbarContainer>
  );
};

export default memo(CustomToolbar);
