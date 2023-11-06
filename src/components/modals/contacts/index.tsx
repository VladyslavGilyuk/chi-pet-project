import { BoxContainer } from './styled';
import ContactsForm from '../../form/contacts';
import { IContactState } from '../../../types/contacts';
import { Modal } from '@mui/material';
import { memo } from 'react';

interface IProps {
  toggleModal: () => void;
  initialValues: IContactState | null;
  isEdit?: boolean;
  isOpen: boolean;
  apiUrl: string;
}

const ContactsModal = ({ toggleModal, initialValues, isEdit, apiUrl, isOpen }: IProps) => {
  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <BoxContainer>
        <ContactsForm
          toggleModal={toggleModal}
          initialValues={initialValues}
          apiUrl={apiUrl}
          isEdit={isEdit}
        />
      </BoxContainer>
    </Modal>
  );
};

export default memo(ContactsModal);
