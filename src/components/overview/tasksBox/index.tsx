import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomSelect from '../select';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React from 'react';
import Tag from '../tags';
import TasksModal from '../modals/tasks';
import { useState } from 'react';
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

const TasksInfoBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [addingTask, setAddingTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Default');

  const statusOptions = {
    Urgent: 'Urgent',
    New: 'New',
    Default: 'Default',
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleAddTask = () => {
    setAddingTask(true);
  };

  const handleCreateTask = () => {
    if (newTask.trim() !== '') {
      tasks.push({ label: newTask, tag: selectedStatus });
      setNewTask('');
      setSelectedStatus('Default');
      setAddingTask(false);
    }
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
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Enter task text'
          />
          <CustomSelect
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            options={statusOptions}
          />
          <CreateButton variant='contained' size='small' onClick={handleCreateTask}>
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
