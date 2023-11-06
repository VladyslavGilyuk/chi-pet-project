import Table from '../common/table';
import { columns, priorityOptions, sortingOptions } from './helper';
import { deleteTicketAsync, fetchTicketAsync } from '../../store/tickets/thunk';
import { tickets, total } from '../../store/tickets/selector';

const TicketsTable = () => {
  return (
    <Table
      columns={columns}
      fetch={fetchTicketAsync}
      items={tickets}
      total={total}
      onDelete={deleteTicketAsync}
      sortingOptions={sortingOptions}
      priorityOptions={priorityOptions}
    />
  );
};
export default TicketsTable;
