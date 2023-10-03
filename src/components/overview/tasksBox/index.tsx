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
  const toggleModal = () => {
    setModalOpen(!modalOpen);
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
          <CreateText>Create new task</CreateText>
          <AddIcon />
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
