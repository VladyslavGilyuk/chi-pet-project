import { Controller } from 'react-hook-form';
import CustomSelect from '../../overview/select';
import { addTask } from '../../../store/tasks/slice';
import { t } from 'i18next';
import useAuthForm from '../../../hooks/useAuthForm';
import { useDispatch } from 'react-redux';
import useFormHelpers from '../../../utils/formHelpers';
import { useState } from 'react';
import { CreateButton, Form, StyledBox, StyledInput } from './styled';

const TaskForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const { handleSubmit, register, errors, control, getValues } = useAuthForm();

  const handleCreateTask = () => {
    const formData = getValues();
    dispatch(
      addTask({
        text: value,
        tag: formData.selectValue,
        checked: false,
        id: Date.now().toString(36),
      }),
    );

    setValue('');
  };

  const statusOptions = [
    { value: 'Urgent', label: 'Urgent' },
    { value: 'New', label: 'New' },
    { value: 'Default', label: 'Default' },
  ];

  const { TasksFormHelper } = useFormHelpers(t);
  return (
    <Form onSubmit={handleSubmit(handleCreateTask)}>
      {TasksFormHelper.map((instance) => (
        <StyledInput
          key={instance.name}
          {...register(instance.name, instance.validations)}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={instance.placeholder}
          type={instance.type}
          error={!!errors[instance.name]}
        />
      ))}
      <StyledBox>
        <Controller
          name='selectValue'
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

export default TaskForm;
