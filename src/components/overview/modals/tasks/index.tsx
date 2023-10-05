import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ReactComponent as CloseIcon } from '..//../../../assets/close.svg';
import Overlay from '../../overlay';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import React from 'react';
import Tag from '../../tags';
import { tasks } from '../../tasksBox/helper';
import { BoxContainer, HeadingContainer } from './styled';
import { Checkbox, FormControlLabel } from '@mui/material';
import {
  CheckboxsContainer,
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
      </BoxContainer>
    </Overlay>
  );
};

export default TasksModal;
