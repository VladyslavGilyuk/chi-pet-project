import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { RootState } from '../../../store';
import Tag from '../tags';
import TaskForm from '../../form/tasks';
import TasksModal from '../../common/modals/tasks';
import { setAddingTask } from '../../../store/tasks/slice';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckboxsContainer,
  Container,
  CreateText,
  HeadingContainer,
  HeadingText,
  StatusName,
  StyledHr,
  TicketsContainer,
  TimelineText,
  ViewButton,
} from './styled';
import { Fragment, useState } from 'react';
import { ITask, tasks } from './helper';
import { useDispatch, useSelector } from 'react-redux';

const TasksInfoBox = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { addingTask } = useSelector((state: RootState) => state.tasks);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleAddTask = () => {
    dispatch(setAddingTask(true));
  };

  const lastTasksNumber: number = -3;
  const visibleTasks: ITask[] = tasks.slice(lastTasksNumber).reverse();

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
        <TaskForm />
      )}

      <StyledHr />
      {visibleTasks.map((task, index) => {
        const isLastTask = index === visibleTasks.length - 1;
        return (
          <Fragment key={index}>
            <CheckboxsContainer>
              <FormControlLabel
                control={
                  <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />
                }
                label={<StatusName>{task.label}</StatusName>}
              />
              <Tag text={task.tag} />
            </CheckboxsContainer>
            {!isLastTask && <StyledHr />}
          </Fragment>
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
