import { BoxContainer } from './styled';
import { ITicketState } from '../../../types/tickets';
import { Modal } from '@mui/material';
import TicketsForm from '../../form/tickets';
import { memo } from 'react';
interface IProps {
  toggleModal: () => void;
  initialValues: ITicketState | null;
  isEdit?: boolean;
  apiUrl: string;
}

const TicketsModal = ({ toggleModal, initialValues, isEdit, apiUrl }: IProps) => {
  return (
    <Modal open={true} onClose={toggleModal}>
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
