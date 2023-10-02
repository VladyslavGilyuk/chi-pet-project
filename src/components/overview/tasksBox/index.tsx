import { ReactComponent as AddIcon } from '../../../assets/add.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Tag from './tags';
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

const TasksInfoBox = () => {
  return (
    <>
      <Container>
        <HeadingContainer>
          <HeadingText>Tasks</HeadingText>
          <StyledButton>View all</StyledButton>
        </HeadingContainer>
        <TimelineText>Today</TimelineText>
        <TicketsContainer>
          <CreateText>Create new task</CreateText>
          <AddIcon />
        </TicketsContainer>
        <StyledHr />
        <CheckboxsContainer>
          <FormControlLabel
            control={
              <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />
            }
            label={<StatusName>Finish ticket update</StatusName>}
          />
          <Tag text='Urgent' />
        </CheckboxsContainer>
        <StyledHr />
        <CheckboxsContainer>
          <FormControlLabel
            control={
              <Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />
            }
            label={<StatusName>Create new ticket example</StatusName>}
          />
          <Tag text='New' />
        </CheckboxsContainer>
        <StyledHr />
        <CheckboxsContainer>
          <FormControlLabel
            control={
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                defaultChecked
              />
            }
            label={<StatusName>Update ticket report</StatusName>}
          />
          <Tag text='Default' />
        </CheckboxsContainer>
      </Container>
    </>
  );
};

export default TasksInfoBox;
