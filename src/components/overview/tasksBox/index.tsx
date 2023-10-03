import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Overlay } from '../overlay/styled';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from '../tags';
import TasksModal from '../modals/tasks';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckboxsContainer,
  Container,
  CreateText,
  HeadingContainer,
  HeadingText,
  StatusName,
  StyledButton,
  StyledHr,
  TicketsContainer,
  TimelineText,
} from './styled';
import { Itasks, tasks } from './helper';

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
  const slicedTasks: Itasks[] = tasks.slice(lastTasksNumber);
  return (
    <>
      <Container>
        <HeadingContainer>
          <HeadingText>Tasks</HeadingText>
          <StyledButton onClick={toggleModal}>View all</StyledButton>
        </HeadingContainer>
        <TimelineText>Today</TimelineText>
        <TicketsContainer>
          {!addingTask ? (
            <>
              <CreateText>Create new task</CreateText>
              <AddIcon onClick={handleAddTask} />
            </>
          ) : (
            <>
              <input
                type='text'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Enter task text'
              />
              <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                <option value='Urgent'>Urgent</option>
                <option value='New'>New</option>
                <option value='Default'>Default</option>
              </select>
              <button onClick={handleCreateTask}>Create</button>
            </>
          )}
        </TicketsContainer>
        <StyledHr />
        {slicedTasks.map((task, index) => {
          const isLastTask = index === slicedTasks.length - 1;
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
    </>
  );
};

export default TasksInfoBox;
