import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { addTask } from '../../../store/tasks/slice';
import { memo } from 'react';
import { statusOptions } from './helper';
import { useDispatch } from 'react-redux';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  CreateButton,
  Form,
  StyledBox,
  StyledButton,
  StyledCustomSelect,
  StyledInput,
} from './styled';

interface IProps {
  handleAddTask: () => void;
}

const TaskForm = ({ handleAddTask }: IProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const handleCreateTask: SubmitHandler<FieldValues> = ({ text, tag }) => {
    dispatch(addTask({ text, tag }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleCreateTask)}>
      <StyledInput
        data-testid='tasks_input'
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
            <StyledCustomSelect
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              options={statusOptions}
              width='50px'
              padding='8px'
            />
          )}
        />

        <CreateButton variant='contained' type='submit' data-testid='create_task_button'>
          Create
        </CreateButton>
        <StyledButton onClick={handleAddTask} data-testid='close_task_button'>
          <CloseIcon />
        </StyledButton>
      </StyledBox>
    </Form>
  );
};

export default memo(TaskForm);
