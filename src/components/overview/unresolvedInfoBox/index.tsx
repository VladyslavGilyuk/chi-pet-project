import {
  Container,
  Group,
  GroupContainer,
  GroupName,
  HeadingContainer,
  HeadingText,
  StatusName,
  StyledButton,
  StyledHr,
  TicketsContainer,
  Value,
} from './styled';

const UnresolvedInfoBox = () => {
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
        <TicketsContainer>
          <StatusName>Waiting on Feature Request</StatusName>
          <Value>4238</Value>
        </TicketsContainer>
        <StyledHr />
        <TicketsContainer>
          <StatusName>Awaiting Customer Response</StatusName>
          <Value>1005</Value>
        </TicketsContainer>
        <StyledHr />
        <TicketsContainer>
          <StatusName>Awaiting Developer Fix</StatusName>
          <Value>914</Value>
        </TicketsContainer>
        <StyledHr />
        <TicketsContainer>
          <StatusName>Pending</StatusName>
          <Value>281</Value>
        </TicketsContainer>
      </Container>
    </>
  );
};

export default UnresolvedInfoBox;
