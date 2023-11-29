import CustomSelect from '../../common/select';
import DatePicker from '../../common/datePicker';
import FormInput from '../../common/formInput';
import { Notify } from '../../../utils/notify';
import { memo } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { useSelector } from 'react-redux';
import { user } from '../../../store/user/selectors';
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
import { createTicketAsync, updateTicketAsync } from '../../../store/tickets/thunk';
interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | null;
  isEdit?: boolean;
  apiUrl: string;
}
const TicketsForm = ({ toggleModal, initialValues, isEdit, apiUrl }: IProps) => {
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
  const currentUser = useSelector(user);

  const handleTicketSubmit: SubmitHandler<ITickets | IUpdateTickets> = async (
    data: ITickets | IUpdateTickets,
  ) => {
    try {
      if (isEdit) {
        const body = { ...data } as IUpdateTickets;
        await dispatch(updateTicketAsync({ id: body.id, data: body }));
      } else {
        const body = { ...data } as ITickets;
        await dispatch(createTicketAsync({ apiUrl, data: body, user: currentUser }));
      }
      toggleModal();
    } catch (error) {
      Notify('Something went wrong');
    }
  };

  return (
    <>
      <StyledHeading>Add tickets</StyledHeading>
      <form onSubmit={handleSubmit(handleTicketSubmit)}>
        {TicketsFormHelper.map((instance) => (
          <FormInput
            {...instance}
            key={instance.name}
            register={register}
            isError={!!errors[instance.name]}
            helperMsg={errors[instance.name]?.message}
            data-testid={`input_${instance.name}`}
          />
        ))}
        <Controller
          name='deadlineDate'
          control={control}
          defaultValue=''
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <DatePicker
                data-testid='demo'
                date={field.value}
                onChange={field.onChange}
                errors={errors}
              />
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
            data-testid='save_button'
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
