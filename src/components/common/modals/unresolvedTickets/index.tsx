import { ReactComponent as CloseIcon } from '../../../../assets/close.svg';
import { Fragment } from 'react';
import Overlay from '../../../overview/overlay';
import Tag from '../../../overview/tags';
import { Typography } from '@mui/material';
import { tickets } from '../../../overview/unresolvedInfoBox/helper';
import {
  BoxContainer,
  HeadingContainer,
  StatusName,
  StyledButton,
  TicketsContainer,
  Value,
} from './styled';
import {
  HeadingText,
  MainInfoContainer,
  StyledHr,
} from '../../../overview/unresolvedInfoBox/styled';

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
          <Fragment key={index}>
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
          </Fragment>
        ))}
      </BoxContainer>
    </Overlay>
  );
};

export default UnresolvedTicketsModal;
