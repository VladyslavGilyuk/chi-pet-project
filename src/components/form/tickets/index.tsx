import { AppDispatch } from '../../../store';
import BasicDatePicker from './datePicker';
import CustomSelect from './select';
import FormInput from '../../common/formInput';
import { ITickets } from '../../../types/tickets';
import { createTicketAsync } from '../../../store/tickets/thunk';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  EmptyHelperText,
  FlexContainer,
  HelperText,
  StyledCancelButton,
  StyledHeading,
  StyledLoginButton,
} from './styled';
import { ITicketFieldValues, TicketsFormHelper, statusOptions } from './helper';

interface IProps {
  toggleModal: () => void;
  refetchTickets: () => void;
}
const TicketsForm = ({ toggleModal, refetchTickets }: IProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateTicket: SubmitHandler<ITickets> = async (data: ITickets) => {
    const body = { ...data };
    await dispatch(createTicketAsync(body));
    refetchTickets();
    toggleModal();
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<ITicketFieldValues>();
  return (
    <>
      <StyledHeading>Add tickets</StyledHeading>
      <form onSubmit={handleSubmit(handleCreateTicket)}>
        {TicketsFormHelper.map((instance) => (
          <FormInput
            {...instance}
            key={instance.name}
            register={register}
            isError={!!errors[instance.name]}
            helperMsg={errors[instance.name]?.message}
          />
        ))}
        <Controller
          name='deadlineDate'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <BasicDatePicker date={field.value} onChange={field.onChange} errors={errors} />
            </>
          )}
        />
        <Controller
          name='priority'
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <CustomSelect
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                options={statusOptions}
                errors={errors}
              />
              {(errors.priority && <HelperText>Tag is required</HelperText>) || (
                <EmptyHelperText>.</EmptyHelperText>
              )}
            </>
          )}
        />
        <FlexContainer>
          <StyledLoginButton
            type='submit'
            variant='contained'
            fullWidth={true}
            disableElevation={true}
          >
            Save
          </StyledLoginButton>

          <StyledCancelButton
            onClick={toggleModal}
            variant='contained'
            fullWidth={true}
            disableElevation={true}
          >
            Cancel
          </StyledCancelButton>
        </FlexContainer>
      </form>
    </>
  );
};
export default memo(TicketsForm);
