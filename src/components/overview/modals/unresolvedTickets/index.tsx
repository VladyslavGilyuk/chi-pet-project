import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import React from 'react';
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
const UnresolvedTicketsModal = ({ toggleModal }: UnresolvedTicketsModalProps) => {
  return (
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
              <Value>Urgent: {ticket.urgent}</Value>
              <Value>New: {ticket.new}</Value>
              <Value>Default: {ticket.default}</Value>
              <Value>Total: {ticket.value}</Value>
            </TicketsContainer>
          </MainInfoContainer>
          {index !== tickets.length - 1 && <StyledHr />}
        </React.Fragment>
      ))}
    </BoxContainer>
  );
};

export default UnresolvedTicketsModal;
