import { BoxContainer } from './styled';
import { Modal } from '@mui/material';
import TicketsForm from '../../form/tickets';
interface IProps {
  toggleModal: () => void;
  refetchTickets: () => void;
}

const TicketsModal = ({ toggleModal, refetchTickets }: IProps) => {
  return (
    <Modal open={true} onClose={toggleModal}>
      <BoxContainer>
        <TicketsForm toggleModal={toggleModal} refetchTickets={refetchTickets} />
      </BoxContainer>
    </Modal>
  );
};

export default TicketsModal;
