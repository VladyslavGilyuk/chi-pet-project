import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { Fragment } from 'react';
import Tag from '../../common/tags';
import { tickets } from '../../overview/unresolvedTicketsBox/helper';
import {
  BoxContainer,
  HeadingContainer,
  StatusName,
  StyledButton,
  TicketsContainer,
  Value,
} from './styled';
import {
  HeadingText,
  MainInfoContainer,
  StyledHr,
} from '../../overview/unresolvedTicketsBox/styled';
import { Modal, Typography } from '@mui/material';

interface IProps {
  toggleModal: () => void;
}

const UnresolvedTicketsModal = ({ toggleModal }: IProps) => {
  return (
    <Modal open={true} onClose={toggleModal}>
      <BoxContainer>
        <HeadingContainer>
          <HeadingText>Unresolved tickets</HeadingText>
          <StyledButton onClick={toggleModal}>
            <CloseIcon />
          </StyledButton>
        </HeadingContainer>
        {tickets.map((ticket, index) => (
          <Fragment key={index}>
            <MainInfoContainer>
              <StatusName>{ticket.status}:</StatusName>
              <TicketsContainer>
                {Object.entries(ticket.categories).map(([key, value], index) => (
                  <Value key={index}>
                    <Tag text={key} />
                    <Typography>{value}</Typography>
                  </Value>
                ))}
                <Value>
                  <Typography>Total: </Typography>
                  <Typography>{ticket.Total}</Typography>
                </Value>
              </TicketsContainer>
            </MainInfoContainer>
            {index !== tickets.length - 1 && <StyledHr />}
          </Fragment>
        ))}
      </BoxContainer>
    </Modal>
  );
};

export default UnresolvedTicketsModal;
