import { ticketsStore } from '../../../store/tickets/selector';
import Table, { EFormType } from '../../common/table';
import { columns, priorityOptions, sortingOptions } from './helper';
import { deleteTicketAsync, fetchTicketAsync } from '../../../store/tickets/thunk';

const TicketsTable = () => {
  return (
    <Table
      columns={columns}
      fetchAction={fetchTicketAsync}
      storeData={ticketsStore}
      deleteAction={deleteTicketAsync}
      sortingOptions={sortingOptions}
      priorityOptions={priorityOptions}
      formType={EFormType.Tickets}
    />
  );
};
export default TicketsTable;
