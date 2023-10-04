import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import Overlay from '../../overlay';
import React from 'react';
import Tag from '../../tags';
import { tickets } from '../../unresolvedInfoBox/helper';
import {
  BoxContainer,
  HeadingContainer,
  StatusName,
  StyledButton,
  TicketsContainer,
} from './styled';
import { HeadingText, MainInfoContainer, StyledHr, Value } from '../../unresolvedInfoBox/styled';

interface UnresolvedTicketsModalProps {
  toggleModal: () => void;
}

const TicketStatus: Record<string, string> = {
  Urgent: 'Urgent',
  New: 'New',
  Default: 'Default',
  Total: 'Total',
};

const UnresolvedTicketsModal = ({ toggleModal }: UnresolvedTicketsModalProps) => {
  return (
    <Overlay toggleModal={toggleModal}>
      <BoxContainer>
        <HeadingContainer>
          <HeadingText>Unresolved tickets</HeadingText>
          <StyledButton onClick={toggleModal}>
            <CloseIcon />
          </StyledButton>
        </HeadingContainer>
        {tickets.map((ticket, index) => (
          <React.Fragment key={ticket.status}>
            <MainInfoContainer>
              <StatusName>{ticket.status}</StatusName>
              <TicketsContainer>
                {Object.keys(TicketStatus).map((text) => (
                  <Value key={text}>
                    {text === 'Total' ? (
                      `Total: ${ticket.value}`
                    ) : (
                      <>
                        <Tag text={TicketStatus[text]} /> : {ticket.value}
                      </>
                    )}
                  </Value>
                ))}
              </TicketsContainer>
            </MainInfoContainer>
            {index !== tickets.length - 1 && <StyledHr />}
          </React.Fragment>
        ))}
      </BoxContainer>
    </Overlay>
  );
};

export default UnresolvedTicketsModal;
