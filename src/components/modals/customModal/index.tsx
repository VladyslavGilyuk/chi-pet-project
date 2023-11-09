import { BoxContainer } from './styled';
import ContactsForm from '../../form/contacts';
import { EFormType } from '../../common/table';
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
  formType: EFormType;
}

const CustomModal = ({ toggleModal, initialValues, isEdit, apiUrl, isOpen, formType }: IProps) => {
  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <BoxContainer>
        {formType === EFormType.Contacts ? (
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
