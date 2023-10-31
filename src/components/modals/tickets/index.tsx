import { AppDispatch } from '../../../store';
import { BoxContainer } from './styled';
import { ITicketState } from '../../../types/tickets';
import { Modal } from '@mui/material';
import TicketsForm from '../../form/tickets';
interface IProps {
  dispatch: AppDispatch;
  toggleModal: () => void;
  refetchTickets: () => void;
  initialValues: ITicketState | null;
  isEdit?: boolean;
}

const TicketsModal = ({ dispatch, toggleModal, refetchTickets, initialValues, isEdit }: IProps) => {
  return (
    <Modal open={true} onClose={toggleModal}>
      <BoxContainer>
        <TicketsForm
          dispatch={dispatch}
          toggleModal={toggleModal}
          refetchTickets={refetchTickets}
          initialValues={initialValues}
          isEdit={isEdit}
        />
      </BoxContainer>
    </Modal>
  );
};

export default TicketsModal;
