import { contactsStore } from '../../store/contacts/selector';
import Table, { EFormType } from '../common/table';
import { columns, sortingOptions } from './helper';
import { deleteContactAsync, fetchContactAsync } from '../../store/contacts/thunk';

const ContactsTable = () => {
  return (
    <Table
      columns={columns}
      fetchAction={fetchContactAsync}
      storeData={contactsStore}
      deleteAction={deleteContactAsync}
      sortingOptions={sortingOptions}
      disabledFilter
      formType={EFormType.Contacts}
    />
  );
};
export default ContactsTable;
