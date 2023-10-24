import { BoxContainer } from './styled';
import { Modal } from '@mui/material';
import { SubmitHandler } from 'react-hook-form';
import TicketsForm from '../../form/tickets';
import { ITicketInitialValues, ITickets, IUpdateTickets } from '../../../types/tickets';
interface IProps {
  toggleModal: () => void;
  refetchTickets: () => void;
  handleForm: SubmitHandler<ITickets> | SubmitHandler<IUpdateTickets>;
  initialValues: ITicketInitialValues | null;
}

const TicketsModal = ({ toggleModal, refetchTickets, handleForm, initialValues }: IProps) => {
  return (
    <Modal open={true} onClose={toggleModal}>
      <BoxContainer>
        <TicketsForm
          toggleModal={toggleModal}
          handleForm={handleForm}
          refetchTickets={refetchTickets}
          initialValues={initialValues}
        />
      </BoxContainer>
    </Modal>
  );
};

export default TicketsModal;
