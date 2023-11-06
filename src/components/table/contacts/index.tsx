/* eslint-disable sort-imports */
import ActionCell from './cells/actionCell';
import CustomToolbar from './customToolbar';
import ContactsModal from '../../modals/contacts';
import { useAppDispatch } from '../../../store/hooks';
import { useSelector } from 'react-redux';
import { useTableSortAndFilter } from './useTableSort';
import { StyledBox, StyledDataGrid } from './styled';
import { baseMenuCellConfig, columns, pageSizeOptions } from './helper';
import { contacts, total } from '../../../store/contacts/selector';
import { useCallback, useState } from 'react';
import { IContactState } from '../../../types/contacts';
import { deleteContactAsync } from '../../../store/contacts/thunk';

const ContactsTable = () => {
  const dispatch = useAppDispatch();

  const { searchParams, paginationModel, setPaginationModel } = useTableSortAndFilter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<IContactState | null>(null);

  const storeContacts = useSelector(contacts);
  const storeTotal = useSelector(total);

  const handleUpdateItem = useCallback(
    (id?: string) => {
      const contactToEdit = storeContacts?.find((contact) => contact.id === id) || null;
      setSelectedContact(contactToEdit);
      setIsModalOpen(true);
    },
    [storeContacts],
  );

  const handleRemoveItem = useCallback(async (id: string, apiUrl: string) => {
    await dispatch(deleteContactAsync({ id, apiUrl }));
  }, []);

  return (
    <StyledBox>
      {storeContacts?.length > 0 && (
        <StyledDataGrid
          autoHeight
          rows={storeContacts}
          rowHeight={92}
          columns={[
            ...columns,
            {
              ...baseMenuCellConfig,
              renderCell: (params) => {
                return (
                  <ActionCell
                    id={params.row.id}
                    apiUrl={`?${searchParams.toString()}`}
                    handleUpdateItem={handleUpdateItem}
                    handleRemoveItem={handleRemoveItem}
                  />
                );
              },
            },
          ]}
          paginationMode='server'
          rowCount={storeTotal}
          pageSizeOptions={pageSizeOptions}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          disableRowSelectionOnClick
          disableColumnMenu
          slots={{
            toolbar: () => <CustomToolbar apiUrl={`?${searchParams.toString()}`} />,
          }}
        />
      )}
      {isModalOpen && (
        <>
          <ContactsModal
            apiUrl={`?${searchParams.toString()}`}
            toggleModal={() => setIsModalOpen(false)}
            initialValues={selectedContact}
            isOpen={isModalOpen}
            isEdit={true}
          />
        </>
      )}
    </StyledBox>
  );
};

export default ContactsTable;
