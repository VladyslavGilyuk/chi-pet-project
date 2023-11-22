import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from '../../common/tags';
import TaskForm from '../../forms/tasks';
import TasksModal from '../../modals/tasks';
import { toggleTask } from '../../../store/tasks/slice';
import { visibleTasks } from '../../../store/tasks/selector';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckboxContainer,
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
import { Fragment, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const TasksInfoBox = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskCreation, setIsAddingTask] = useState(false);

  const tasks = useSelector(visibleTasks);
  const dispatch = useDispatch();

  const toggleModal = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleAddTask = useCallback(() => {
    setIsAddingTask((prev) => !prev);
  }, []);

  const handleCheck = useCallback((id: string) => {
    dispatch(toggleTask(id));
  }, []);

  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Tasks</HeadingText>
        <ViewButton onClick={toggleModal}>View all</ViewButton>
      </HeadingContainer>
      <TimelineText>Today</TimelineText>
      {!isTaskCreation ? (
        <TicketsContainer>
          <CreateText>Create new task</CreateText>
          <AddIcon onClick={handleAddTask} />
        </TicketsContainer>
      ) : (
        <TaskForm handleAddTask={handleAddTask} />
      )}
      <StyledHr />
      {tasks.map(({ id, text, checked, tag }, index) => {
        const isLastTask = index === tasks.length - 1;
        return (
          <Fragment key={index}>
            <CheckboxContainer>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    checked={checked}
                    onChange={() => handleCheck(id)}
                  />
                }
                label={<StatusName>{text}</StatusName>}
              />
              <Tag text={tag} />
            </CheckboxContainer>
            {!isLastTask && <StyledHr />}
          </Fragment>
        );
      })}
      {isModalOpen && (
        <>
          <TasksModal toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default TasksInfoBox;
