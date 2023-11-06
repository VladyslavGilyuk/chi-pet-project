import { BoxContainer } from './styled';
import ContactsForm from '../../form/contacts';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import { Modal } from '@mui/material';
import TicketsForm from '../../form/tickets';
import { memo } from 'react';

interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | IContactState | null;
  isEdit?: boolean;
  isOpen: boolean;
  apiUrl: string;
  contactsForm?: boolean;
}

const CustomModal = ({
  toggleModal,
  initialValues,
  isEdit,
  apiUrl,
  isOpen,
  contactsForm,
}: IProps) => {
  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <BoxContainer>
        {contactsForm ? (
          <ContactsForm
            toggleModal={toggleModal}
            initialValues={initialValues as IContactState}
            apiUrl={apiUrl}
            isEdit={isEdit}
          />
        ) : (
          <TicketsForm
            toggleModal={toggleModal}
            initialValues={initialValues as ITicketState}
            apiUrl={apiUrl}
            isEdit={isEdit}
          />
        )}
      </BoxContainer>
    </Modal>
  );
};

export default memo(CustomModal);
