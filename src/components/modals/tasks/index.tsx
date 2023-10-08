import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { Fragment } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from '../../overview/tags';
import { modalTasks } from '../../../store/tasks/selectors';
import { toggleTask } from '../../../store/tasks/actions';
import { BoxContainer, HeadingContainer } from './styled';
import { Checkbox, FormControlLabel, Modal } from '@mui/material';
import {
  CheckboxContainer,
  HeadingText,
  StatusName,
  StyledHr,
  ViewButton,
} from '../../overview/tasksInfoBox/styled';
import { useDispatch, useSelector } from 'react-redux';

interface TasksModalProps {
  toggleModal: () => void;
}

const TasksModal = ({ toggleModal }: TasksModalProps) => {
  const dispatch = useDispatch();

  const handleCheck = (id: string) => {
    dispatch(toggleTask(id));
  };

  const tasks = useSelector(modalTasks);
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
        {tasks.map(({ id, checked, text, tag }, index) => {
          const isLastTask = id === tasks[tasks.length - 1].id;
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
      </BoxContainer>
    </Modal>
  );
};

export default TasksModal;
