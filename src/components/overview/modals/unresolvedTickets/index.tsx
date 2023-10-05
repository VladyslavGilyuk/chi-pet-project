import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import Overlay from '../../overlay';
import React from 'react';
import Tag from '../../tags';
import { Typography } from '@mui/material';
import { tickets } from '../../unresolvedInfoBox/helper';
import {
  BoxContainer,
  HeadingContainer,
  StatusName,
  StyledButton,
  TicketsContainer,
  Value,
} from './styled';
import { HeadingText, MainInfoContainer, StyledHr } from '../../unresolvedInfoBox/styled';

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
          <React.Fragment key={index}>
            <MainInfoContainer>
              <StatusName>{ticket.status}:</StatusName>
              <TicketsContainer>
                {Object.keys(TicketStatus).map((text, index) => (
                  <Value key={index}>
                    {text === 'Total' ? (
                      <>
                        <Typography>Total:</Typography>
                        <Typography>{ticket.value}</Typography>
                      </>
                    ) : (
                      <>
                        <Tag text={TicketStatus[text]} />
                        {text === TicketStatus.Urgent
                          ? ticket.urgent
                          : text === TicketStatus.New
                          ? ticket.new
                          : text === TicketStatus.Default
                          ? ticket.default
                          : null}
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
