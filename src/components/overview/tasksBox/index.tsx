import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomSelect from '../select';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React from 'react';
import { RootState } from '../../../store';
import Tag from '../tags';
import TasksModal from '../modals/tasks';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckboxsContainer,
  Container,
  CreateButton,
  CreateText,
  HeadingContainer,
  HeadingText,
  InputContainer,
  StatusName,
  StyledHr,
  StyledInput,
  TicketsContainer,
  TimelineText,
  ViewButton,
} from './styled';
import { ITask, tasks } from './helper';
import {
  setAddingTask,
  setModalOpen,
  setNewLabel,
  setSelectedStatus,
} from '../../../store/tasks/slice';
import { useDispatch, useSelector } from 'react-redux';

const TasksInfoBox = () => {
  const {
    label: newTask,
    status: selectedStatus,
    modal: modalOpen,
    addingTask,
  } = useSelector((state: RootState) => state.task);

  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(setModalOpen(!modalOpen));
  };
  const handleAddTask = () => {
    dispatch(setAddingTask(true));
  };

  const handleCreateTask = () => {
    if (newTask.trim() !== '') {
      tasks.push({ label: newTask, tag: selectedStatus });
      dispatch(setNewLabel(''));
      dispatch(setSelectedStatus('Default'));
      dispatch(setAddingTask(false));
    }
  };

  const statusOptions = {
    Urgent: 'Urgent',
    New: 'New',
    Default: 'Default',
  };

  const lastTasksNumber: number = -3;
  const visibleTasks: ITask[] = tasks.slice(lastTasksNumber);

  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Tasks</HeadingText>
        <ViewButton onClick={toggleModal}>View all</ViewButton>
      </HeadingContainer>
      <TimelineText>Today</TimelineText>

      {!addingTask ? (
        <TicketsContainer>
          <CreateText>Create new task</CreateText>
          <AddIcon onClick={handleAddTask} />
        </TicketsContainer>
      ) : (
        <InputContainer>
          <StyledInput
            type='text'
            value={newTask}
            onChange={(e) => dispatch(setNewLabel(e.target.value))}
            placeholder='Enter task text'
          />
          <CustomSelect
            value={selectedStatus}
            onChange={(e) => dispatch(setSelectedStatus(e.target.value))}
            options={statusOptions}
          />
          <CreateButton variant='contained' onClick={handleCreateTask}>
            Create
          </CreateButton>
        </InputContainer>
      )}

      <StyledHr />
      {visibleTasks.map((task, index) => {
        const isLastTask = index === visibleTasks.length - 1;
        return (
          <React.Fragment key={index}>
            <CheckboxsContainer>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    defaultChecked={isLastTask}
                  />
                }
                label={<StatusName>{task.label}</StatusName>}
              />
              <Tag text={task.tag} />
            </CheckboxsContainer>
            {!isLastTask && <StyledHr />}
          </React.Fragment>
        );
      })}
      {modalOpen && (
        <>
          <TasksModal toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default TasksInfoBox;
