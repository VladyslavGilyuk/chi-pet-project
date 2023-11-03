import { BoxContainer } from './styled';
import { ITicketState } from '../../../types/tickets';
import { Modal } from '@mui/material';
import TicketsForm from '../../form/tickets';
import { memo } from 'react';
interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | null;
  isEdit?: boolean;
  isOpen: boolean;
  apiUrl: string;
}

const TicketsModal = ({ toggleModal, initialValues, isEdit, apiUrl, isOpen }: IProps) => {
  return (
    <Modal open={isOpen} onClose={toggleModal}>
      <BoxContainer>
        <TicketsForm
          toggleModal={toggleModal}
          initialValues={initialValues}
          apiUrl={apiUrl}
          isEdit={isEdit}
        />
      </BoxContainer>
    </Modal>
  );
};

export default memo(TicketsModal);
