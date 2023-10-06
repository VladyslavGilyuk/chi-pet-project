import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as CloseIcon } from '..//../../../assets/close.svg';
import { Fragment } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { RootState } from '../../../../store';
import Tag from '../../../overview/tags';
import { toggleTask } from '../../../../store/tasks/slice';
import { BoxContainer, HeadingContainer } from './styled';
import { Checkbox, FormControlLabel, Modal } from '@mui/material';
import {
  CheckboxsContainer,
  HeadingText,
  StatusName,
  StyledHr,
  ViewButton,
} from '../../../overview/tasksInfoBox/styled';
import { useDispatch, useSelector } from 'react-redux';

interface TasksModalProps {
  toggleModal: () => void;
}

const TasksModal = ({ toggleModal }: TasksModalProps) => {
  const dispatch = useDispatch();

  const handleCheck = (id: string) => {
    dispatch(toggleTask({ id }));
  };

  const { tasks } = useSelector((state: RootState) => state.tasks);
  const visibleTasks = [...tasks].reverse();
  return (
    <Modal open={true} onClose={toggleModal}>
      <BoxContainer>
        <HeadingContainer>
          <HeadingText>Tasks</HeadingText>
          <ViewButton onClick={toggleModal}>
            <CloseIcon />
          </ViewButton>
        </HeadingContainer>
        <StyledHr />
        {visibleTasks.map((task, index) => {
          const isLastTask = index === tasks.length - 1;
          return (
            <Fragment key={index}>
              <CheckboxsContainer>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      checked={task.checked}
                      onChange={() => handleCheck(task.id)}
                    />
                  }
                  label={<StatusName>{task.text}</StatusName>}
                />
                <Tag text={task.tag} />
              </CheckboxsContainer>
              {!isLastTask && <StyledHr />}
            </Fragment>
          );
        })}
      </BoxContainer>
    </Modal>
  );
};

export default TasksModal;
