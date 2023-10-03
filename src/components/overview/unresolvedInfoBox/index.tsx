import React from 'react';
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

const UnresolvedInfoBox = () => {
  const lastTicketsNumber: number = -4;
  const slicedTickets: IUnresolvedTickets[] = tickets.slice(lastTicketsNumber);

  return (
    <>
      <Container>
        <HeadingContainer>
          <HeadingText>Unresolved tickets</HeadingText>
          <StyledButton>View details</StyledButton>
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
      </Container>
    </>
  );
};

export default UnresolvedInfoBox;
