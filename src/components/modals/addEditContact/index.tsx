import { BoxContainer } from './styled';
import ContactsForm from '../../forms/contacts';
import { IContactState } from '../../../types/contacts';
import { ITicketState } from '../../../types/tickets';
import { Modal } from '@mui/material';
import { memo } from 'react';

interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | IContactState | null;
  isEdit?: boolean;
  isOpen: boolean;
  apiUrl: string;
}

const AddEditContact = ({ toggleModal, initialValues, isEdit, apiUrl, isOpen }: IProps) => {
  return (
    <Modal data-testid='modal' open={isOpen} onClose={toggleModal}>
      <BoxContainer>
        <ContactsForm
          toggleModal={toggleModal}
          initialValues={initialValues as IContactState}
          apiUrl={apiUrl}
          isEdit={isEdit}
        />
      </BoxContainer>
    </Modal>
  );
};

export default memo(AddEditContact);
