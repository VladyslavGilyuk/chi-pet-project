import CustomSelect from '../../overview/select';
import { RootState } from '../../../store';
import { t } from 'i18next';
import { tasks } from '../../overview/tasksInfoBox/helper';
import useAuthForm from '../../../hooks/useAuthForm';
import useFormHelpers from '../../../utils/formHelpers';
import { CreateButton, Form, StyledBox, StyledInput } from './styled';
import { setAddingTask, setNewLabel, setSelectedStatus } from '../../../store/tasks/slice';
import { useDispatch, useSelector } from 'react-redux';

const TaskForm = () => {
  const { label: newTask, status: selectedStatus } = useSelector((state: RootState) => state.tasks);

  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useAuthForm();

  const handleCreateTask = () => {
    tasks.push({ label: newTask, tag: selectedStatus });
    dispatch(setNewLabel(''));
    dispatch(setSelectedStatus('Default'));
    dispatch(setAddingTask(false));
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
          value={newTask}
          onChange={(e) => dispatch(setNewLabel(e.target.value))}
          placeholder={instance.placeholder}
          type={instance.type}
          error={!!errors[instance.name]}
        />
      ))}
      <StyledBox>
        <CustomSelect
          value={selectedStatus}
          onChange={(e) => dispatch(setSelectedStatus(e.target.value))}
          options={statusOptions}
        />
        <CreateButton variant='contained' type='submit'>
          Create
        </CreateButton>
      </StyledBox>
    </Form>
  );
};

export default TaskForm;
