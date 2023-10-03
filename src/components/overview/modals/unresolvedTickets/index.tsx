import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import React from 'react';
import { tickets } from '../../unresolvedInfoBox/helper';
import { BoxContainer, HeadingContainer, StyledButton } from './styled';
import {
  HeadingText,
  MainInfoContainer,
  StatusName,
  StyledHr,
  TicketsContainer,
  Value,
} from '../../unresolvedInfoBox/styled';

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
            <TicketsContainer>
              <StatusName>{ticket.status}</StatusName>
              <Value>{ticket.value}</Value>
            </TicketsContainer>
          </MainInfoContainer>
          {index !== tickets.length - 1 && <StyledHr />}
        </React.Fragment>
      ))}
    </BoxContainer>
  );
};

export default UnresolvedTicketsModal;
