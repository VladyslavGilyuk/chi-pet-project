import Table from '../common/table';
import { columns, sortingOptions } from './helper';
import { contacts, total } from '../../store/contacts/selector';
import { deleteContactAsync, fetchContactAsync } from '../../store/contacts/thunk';

const ContactsTable = () => {
  return (
    <Table
      columns={columns}
      fetch={fetchContactAsync}
      items={contacts}
      total={total}
      onDelete={deleteContactAsync}
      sortingOptions={sortingOptions}
      disabledFilter
      contactsForm
    />
  );
};
export default ContactsTable;
