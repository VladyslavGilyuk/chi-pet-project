import { BoxContainer } from './styled';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import { Modal } from '@mui/material';
import TicketsForm from '../../forms/tickets';
import { memo } from 'react';

interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | IContactState | null;
  isEdit?: boolean;
  isOpen: boolean;
  apiUrl: string;
}

const AddEditTicket = ({ toggleModal, initialValues, isEdit, apiUrl, isOpen }: IProps) => {
  return (
    <Modal data-testid='ticket_modal' open={isOpen} onClose={toggleModal}>
      <BoxContainer>
        <TicketsForm
          toggleModal={toggleModal}
          initialValues={initialValues as ITicketState}
          apiUrl={apiUrl}
          isEdit={isEdit}
        />
      </BoxContainer>
    </Modal>
  );
};

export default memo(AddEditTicket);
