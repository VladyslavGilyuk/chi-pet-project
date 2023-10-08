import { ReactComponent as CloseIcon } from '../../../assets/close.svg';
import { Fragment } from 'react';
import Tag from '../../overview/tags';
import { TicketStatus } from './helper';
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

interface UnresolvedTicketsModalProps {
  toggleModal: () => void;
}

const UnresolvedTicketsModal = ({ toggleModal }: UnresolvedTicketsModalProps) => {
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
                {TicketStatus.map((status, index) => (
                  <Value key={index}>
                    {status.key === 'Total' ? (
                      <>
                        <Typography>Total:</Typography>
                        <Typography>{ticket.value}</Typography>
                      </>
                    ) : (
                      <>
                        <Tag text={status.value} />
                        {status.key === 'Urgent'
                          ? ticket.urgent
                          : status.key === 'New'
                          ? ticket.new
                          : status.key === 'Default'
                          ? ticket.default
                          : null}
                      </>
                    )}
                  </Value>
                ))}
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
