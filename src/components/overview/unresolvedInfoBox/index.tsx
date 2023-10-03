import { Overlay } from '../overlay/styled';
import UnresolvedTicketsModal from '../modals/unresolvedTickets';
import {
  Container,
  Group,
  GroupContainer,
  GroupName,
  HeadingContainer,
  HeadingText,
  MainInfoContainer,
  StatusName,
  StyledButton,
  StyledHr,
  TicketsContainer,
  Value,
} from './styled';
import { IUnresolvedTickets, tickets } from './helper';
import React, { useState } from 'react';

const UnresolvedInfoBox = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const lastTicketsNumber: number = -4;
  const slicedTickets: IUnresolvedTickets[] = tickets.slice(lastTicketsNumber);

  return (
    <>
      <Container>
        <HeadingContainer>
          <HeadingText>Unresolved tickets</HeadingText>
          <StyledButton onClick={toggleModal}>View details</StyledButton>
        </HeadingContainer>
        <GroupContainer>
          <Group>Group:</Group>
          <GroupName>Support</GroupName>
        </GroupContainer>
        {slicedTickets.map((ticket, index) => (
          <React.Fragment key={ticket.status}>
            <MainInfoContainer>
              <TicketsContainer>
                <StatusName>{ticket.status}</StatusName>
                <Value>{ticket.value}</Value>
              </TicketsContainer>
            </MainInfoContainer>
            {index !== slicedTickets.length - 1 && <StyledHr />}
          </React.Fragment>
        ))}
        {modalOpen && (
          <>
            <Overlay onClick={toggleModal} />
            <UnresolvedTicketsModal toggleModal={toggleModal} />
          </>
        )}
      </Container>
    </>
  );
};

export default UnresolvedInfoBox;
