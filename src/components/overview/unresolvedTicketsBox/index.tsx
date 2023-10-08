import UnresolvedTicketsModal from '../../modals/unresolvedTickets';
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

const UnresolvedTicketsBox = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const toggleModal = () => {
    setisModalOpen((prev) => !prev);
  };

  const visibleTickets: IUnresolvedTickets[] = tickets.slice(-4);

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
      {visibleTickets.map(({ status, value }, index) => (
        <Fragment key={index}>
          <MainInfoContainer>
            <TicketsContainer>
              <StatusName>{status}</StatusName>
              <Value>{value}</Value>
            </TicketsContainer>
          </MainInfoContainer>
          {index !== visibleTickets.length - 1 && <StyledHr />}
        </Fragment>
      ))}
      {isModalOpen && (
        <>
          <UnresolvedTicketsModal toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default UnresolvedTicketsBox;
