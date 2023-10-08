import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import CustomSelect from '../../overview/select';
import { ITaskInput } from '../../../types/tasks';
import { addTask } from '../../../store/tasks/slice';
import { statusOptions } from './helper';
import { useDispatch } from 'react-redux';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CreateButton, Form, StyledBox, StyledButton, StyledInput } from './styled';
interface UnresolvedTicketsModalProps {
  handleAddTask: () => void;
}

const TaskForm = ({ handleAddTask }: UnresolvedTicketsModalProps) => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const handleCreateTask: SubmitHandler<FieldValues> = (data) => {
    dispatch(addTask(data as ITaskInput));
    reset();
  };

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
        <StyledButton onClick={handleAddTask}>
          <CloseIcon />
        </StyledButton>
      </StyledBox>
    </Form>
  );
};

export default TaskForm;
