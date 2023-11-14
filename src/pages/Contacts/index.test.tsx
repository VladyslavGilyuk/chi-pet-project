import '@testing-library/jest-dom';
import Contacts from './index';
import { render } from '@testing-library/react';

jest.mock('../../components/tables/contacts', () => {
  const ContactsTable = () => <div data-testid='contacts-table' />;
  return ContactsTable;
});

describe('Contacts Component', () => {
  it('renders Contacts component correctly', () => {
    const { getByTestId } = render(<Contacts />);

    expect(getByTestId('contacts-table')).toBeInTheDocument();
  });
});
