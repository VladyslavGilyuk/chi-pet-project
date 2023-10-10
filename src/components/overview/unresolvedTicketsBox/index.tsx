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
import { Fragment, useCallback, useMemo, useState } from 'react';
import { IUnresolvedTicket, tickets } from './helper';
const UnresolvedTicketsBox = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const visibleTickets: IUnresolvedTicket[] = useMemo(() => tickets.slice(-4), [tickets.length]);

  const toggleModal = useCallback(() => {
    setisModalOpen((prev) => !prev);
  }, []);

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
      {visibleTickets.map(({ status, Total }, index) => {
        return (
          <Fragment key={index}>
            <MainInfoContainer>
              <TicketsContainer>
                <StatusName>{status}</StatusName>
                <Value>{Total}</Value>
              </TicketsContainer>
            </MainInfoContainer>
            {index !== visibleTickets.length - 1 && <StyledHr />}
          </Fragment>
        );
      })}
      {isModalOpen && (
        <>
          <UnresolvedTicketsModal toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default UnresolvedTicketsBox;
