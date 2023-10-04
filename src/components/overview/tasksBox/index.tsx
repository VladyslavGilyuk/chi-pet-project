import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Overlay } from '../overlay/styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from '../tags';
import TasksModal from '../modals/tasks';
import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, MenuItem, Select } from '@mui/material';
import {
  CheckboxsContainer,
  Container,
  CreateText,
  HeadingContainer,
  HeadingText,
  InputContainer,
  StatusName,
  StyledButton,
  StyledHr,
  StyledInput,
  TicketsContainer,
  TimelineText,
} from './styled';
import { ITask, tasks } from './helper';

const TasksInfoBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [addingTask, setAddingTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Default');

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
        <StyledButton onClick={toggleModal}>View all</StyledButton>
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
            size='small'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Enter task text'
          />
          <Select
            value={selectedStatus}
            size='small'
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <MenuItem value='Urgent'>Urgent</MenuItem>
            <MenuItem value='New'>New</MenuItem>
            <MenuItem value='Default'>Default</MenuItem>
          </Select>
          <Button variant='contained' size='small' onClick={handleCreateTask}>
            Create
          </Button>
        </InputContainer>
      )}

      <StyledHr />
      {visibleTasks.map((task, index) => {
        const isLastTask = index === visibleTasks.length - 1;
        return (
          <>
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
          </>
        );
      })}
      {modalOpen && (
        <>
          <Overlay onClick={toggleModal} />
          <TasksModal toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default TasksInfoBox;
