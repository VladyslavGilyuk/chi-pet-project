import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { Fragment } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from '../../common/tags';
import { modalTasks } from '../../../store/tasks/selector';
import { toggleTask } from '../../../store/tasks/slice';
import { BoxContainer, HeadingContainer } from './styled';
import { Checkbox, FormControlLabel, Modal } from '@mui/material';
import {
  CheckboxContainer,
  HeadingText,
  StatusName,
  StyledHr,
  ViewButton,
} from '../../cards/tasksInfoBox/styled';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  toggleModal: () => void;
}

const TasksModal = ({ toggleModal }: IProps) => {
  const tasks = useSelector(modalTasks);

  const dispatch = useDispatch();

  const handleCheck = (id: string) => {
    dispatch(toggleTask(id));
  };

  return (
    <Modal open={true} onClose={toggleModal} data-testid='tasks_modal'>
      <BoxContainer>
        <HeadingContainer>
          <HeadingText>Tasks</HeadingText>
          <ViewButton onClick={toggleModal} data-testid='close_tasks_modal'>
            <CloseIcon />
          </ViewButton>
        </HeadingContainer>
        <StyledHr />
        {tasks.map(({ id, checked, text, tag }, index) => {
          const isLastTask = index === tasks.length - 1;
          return (
            <Fragment key={index}>
              <CheckboxContainer>
                <FormControlLabel
                  control={
                    <Checkbox
                      data-testid='modal_checkbox'
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
