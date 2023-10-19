import { FieldValues } from 'react-hook-form';
import { ISelectOptions } from '../../common/select';
export type ITicketFieldNames = 'ticketDetails' | 'customerName';
export type TFieldType = 'password' | 'text';

export interface ITicketFieldValues extends FieldValues {
  ticketDetails: string;
  customerName: string;
}
export interface ITicketField {
  name: ITicketFieldNames;
  label: string;
  validations: {
    required: string;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
  placeholder: string;
  type: TFieldType;
  showIcon?: boolean;
}
export const statusOptions: ISelectOptions[] = [
  { value: 'High', label: 'High' },
  { value: 'Normal', label: 'Normal' },
  { value: 'Low', label: 'Low' },
];

export const TicketsFormHelper: ITicketField[] = [
  {
    name: 'ticketDetails',
    label: 'Ticket Details',
    validations: {
      required: 'Ticket details are required',
    },
    placeholder: 'Add description',
    type: 'text',
  },
  {
    name: 'customerName',
    label: 'Customer Name',
    validations: {
      required: 'Customer name is required',
    },
    placeholder: 'Name',
    type: 'text',
  },
];
