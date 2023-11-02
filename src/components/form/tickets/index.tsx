/* eslint-disable sort-imports */
import DatePicker from '../../common/datePicker';
import FormInput from '../../common/formInput';
import { createTicketAsync, updateTicketAsync } from '../../../store/tickets/thunk';
import { useAppDispatch } from '../../../store/hooks';
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
import { ITicketState, ITickets, IUpdateTickets } from '../../../types/tickets';
import { memo } from 'react';
import CustomSelect from '../../common/select';

interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | null;
  isEdit?: boolean;
}
const TicketsForm = ({ toggleModal, initialValues, isEdit }: IProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<ITicketFieldValues>({
    defaultValues: {
      ...initialValues,
      deadlineDate: initialValues ? new Date(initialValues.deadlineDate) : '',
    },
  });

  const dispatch = useAppDispatch();

  const handleCreateTicket: SubmitHandler<ITickets> = async (data: ITickets) => {
    const body = { ...data };
    await dispatch(createTicketAsync(body));
    toggleModal();
  };

  const handleEditTicket: SubmitHandler<IUpdateTickets> = async (data: IUpdateTickets) => {
    const body = { ...data };
    const ticketId = data.id;
    if (ticketId) {
      await dispatch(updateTicketAsync({ id: ticketId, data: body }));
      toggleModal();
    } else {
      throw new Error('Error: Invalid ticket id');
    }
  };
  return (
    <>
      <StyledHeading>Add tickets</StyledHeading>
      <form onSubmit={handleSubmit(isEdit ? handleEditTicket : handleCreateTicket)}>
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
              <DatePicker date={field.value} onChange={field.onChange} errors={errors} />
            </>
          )}
        />
        <Controller
          name='priority'
          control={control}
          defaultValue={initialValues ? initialValues.priority : ''}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <CustomSelect
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                options={statusOptions}
                errors={errors}
                label='Priority'
                placeholder='Name'
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
