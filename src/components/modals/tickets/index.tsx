/* eslint-disable sort-imports */
import { Modal } from '@mui/material';
import TicketsForm from '../../form/tickets';
import { BoxContainer } from './styled';
interface IProps {
  toggleModal: () => void;
}

const TicketsModal = ({ toggleModal }: IProps) => {
  return (
    <Modal open={true} onClose={toggleModal}>
      <BoxContainer>
        <TicketsForm toggleModal={toggleModal} />
      </BoxContainer>
    </Modal>
  );
};

export default TicketsModal;
