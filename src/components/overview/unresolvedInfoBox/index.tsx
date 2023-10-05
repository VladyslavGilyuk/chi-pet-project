import UnresolvedTicketsModal from '../../common/modals/unresolvedTickets';
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
import { Fragment, useState } from 'react';
import { IUnresolvedTickets, tickets } from './helper';

const UnresolvedInfoBox = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const lastTicketsNumber: number = -4;
  const visibleTickets: IUnresolvedTickets[] = tickets.slice(lastTicketsNumber);

  return (
    <Container>
      <HeadingContainer>
        <HeadingText>Unresolved tickets</HeadingText>
        <StyledButton onClick={toggleModal}>View details</StyledButton>
      </HeadingContainer>
      <GroupContainer>
        <Group>Group:</Group>
        <GroupName>Support</GroupName>
      </GroupContainer>
      {visibleTickets.map((ticket, index) => (
        <Fragment key={index}>
          <MainInfoContainer>
            <TicketsContainer>
              <StatusName>{ticket.status}</StatusName>
              <Value>{ticket.value}</Value>
            </TicketsContainer>
          </MainInfoContainer>
          {index !== visibleTickets.length - 1 && <StyledHr />}
        </Fragment>
      ))}
      {modalOpen && (
        <>
          <UnresolvedTicketsModal toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default UnresolvedInfoBox;
