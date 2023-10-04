import { BoxContainer } from './styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as CloseIcon } from '..//../../../assets/close.svg';
import Overlay from '../../overlay';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from '../../tags';
import { tasks } from '../../tasksBox/helper';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckboxsContainer,
  HeadingContainer,
  HeadingText,
  StatusName,
  StyledHr,
  ViewButton,
} from '../../tasksBox/styled';

interface TasksModalProps {
  toggleModal: () => void;
}
const TasksModal = ({ toggleModal }: TasksModalProps) => {
  return (
    <Overlay toggleModal={toggleModal}>
      <BoxContainer>
        <HeadingContainer>
          <HeadingText>Tasks</HeadingText>
          <ViewButton onClick={toggleModal}>
            <CloseIcon />
          </ViewButton>
        </HeadingContainer>
        <StyledHr />
        {tasks.map((task, index) => {
          const isLastTask = index === tasks.length - 1;
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
      </BoxContainer>
    </Overlay>
  );
};

export default TasksModal;
