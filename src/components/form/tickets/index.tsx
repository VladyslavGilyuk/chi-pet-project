/* eslint-disable sort-imports */
import { memo } from 'react';
import {
  EmptyHelperText,
  FlexContainer,
  HelperText,
  StyledCancelButton,
  StyledHeading,
  StyledLoginButton,
} from './styled';
import FormInput from '../../common/formInput';
import { ITicketFieldValues, TicketsFormHelper, statusOptions } from './helper';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from './select';
import BasicDatePicker from './datePicker';
interface IProps {
  toggleModal: () => void;
}
const TicketsForm = ({ toggleModal }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSignInSubmit: any = () => {
    // eslint-disable-next-line no-console
    console.log('All good');
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
      <form onSubmit={handleSubmit(onSignInSubmit)}>
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
          name='date' // Provide a name for the date field
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <BasicDatePicker
                date={field.value} // Pass the selected date value
                onChange={field.onChange} // Pass the onChange handler
                errors={errors}
              />
            </>
          )}
        />
        <Controller
          name='tag'
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
              {(errors.tag && <HelperText>Tag is required</HelperText>) || (
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
  /*const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm();
*/
  /*const dispatch = useDispatch();*/
  /*const handleCreateTask: SubmitHandler<FieldValues> = ({ text, tag }) => {
    dispatch(addTask({ text, tag }));
    reset();*/
};
/*
  return (
    <Form onSubmit={handleSubmit(handleCreateTask)}>
      <StyledInput
        key='text'
        {...register('text', { required: true })}
        placeholder='Enter text'
        type='text'
        error={!!errors['text']}
      />

      <StyledBox>
        <Controller
          name='tag'
          control={control}
          defaultValue='Default'
          render={({ field }) => (
            <CustomSelect
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              options={statusOptions}
            />
          )}
        />

        <CreateButton variant='contained' type='submit'>
          Create
        </CreateButton>
      </StyledBox>
    </Form>
  );
};
*/
export default memo(TicketsForm);
