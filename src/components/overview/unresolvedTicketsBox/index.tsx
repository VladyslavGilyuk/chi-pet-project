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
        <HeadingText data-testid='heading'>Unresolved tickets</HeadingText>
        <StyledButton data-testid='heading-button' onClick={toggleModal}>
          View details
        </StyledButton>
      </HeadingContainer>
      <GroupContainer>
        <Group data-testid='group-label'>Group:</Group>
        <GroupName data-testid='group-name'>Support</GroupName>
      </GroupContainer>
      {visibleTickets.map(({ status, Total }, index) => {
        return (
          <Fragment key={index}>
            <MainInfoContainer>
              <TicketsContainer>
                <StatusName data-testid={`status-${status}`}>{status}</StatusName>
                <Value data-testid={`total-${Total}`}>{Total}</Value>
              </TicketsContainer>
            </MainInfoContainer>
            {index !== visibleTickets.length - 1 && <StyledHr />}
          </Fragment>
        );
      })}
      {isModalOpen && (
        <>
          <UnresolvedTicketsModal data-testid='modal' toggleModal={toggleModal} />
        </>
      )}
    </Container>
  );
};

export default UnresolvedTicketsBox;
