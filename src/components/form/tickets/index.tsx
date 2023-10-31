import { AppDispatch } from '../../../store';
import CustomSelect from './select';
import DatePicker from './datePicker';
import FormInput from '../../common/formInput';
import TicketService from '../../../service/TicketService';
import { createTicketAsync } from '../../../store/tickets/thunk';
import { updateTicket } from '../../../store/tickets/slice';
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
import { memo, useEffect } from 'react';

interface IProps {
  toggleModal: () => void;
  refetchTickets: () => void;
  initialValues: ITicketState | null;
  dispatch: AppDispatch;
  isEdit?: boolean;
}
const TicketsForm = ({ toggleModal, refetchTickets, initialValues, dispatch, isEdit }: IProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    control,
  } = useForm<ITicketFieldValues>();

  useEffect(() => {
    if (initialValues) {
      const keys = Object.keys(initialValues);
      keys.forEach((key) => {
        if (key === 'deadlineDate') {
          setValue(key, new Date(initialValues[key]));
        } else {
          setValue(key, initialValues[key as keyof ITicketState]);
        }
      });
    }
  }, [initialValues]);

  const handleCreateTicket: SubmitHandler<ITickets> = async (data: ITickets) => {
    const body = { ...data };
    await dispatch(createTicketAsync(body));
    refetchTickets();
    toggleModal();
  };

  const handleEditTicket: SubmitHandler<IUpdateTickets> = async (data: IUpdateTickets) => {
    const transformedData = {
      ...data,
      updatedDate: new Date(),
    };
    const ticketId = initialValues?.id;
    if (ticketId) {
      const updatedTicket = await TicketService.update(ticketId, transformedData);
      dispatch(updateTicket(updatedTicket.data));
      refetchTickets();
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
