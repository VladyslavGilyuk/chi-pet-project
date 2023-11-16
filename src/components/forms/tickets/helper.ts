import { FieldValues } from 'react-hook-form';
import { ISelectOptions } from '../../common/select';

export type ITicketFieldNames = 'ticket' | 'customer';
export type TFieldType = 'password' | 'text';

export interface ITicketFieldValues extends FieldValues {
  id: string;
  ticket: string;
  customer: string;
  createDate: Date | string;
  deadlineDate: Date | string;
  updatedDate: Date | string;
  priority: string;
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
    name: 'ticket',
    label: 'Ticket Details',
    validations: {
      required: 'Ticket details are required',
    },
    placeholder: 'Add description',
    type: 'text',
  },
  {
    name: 'customer',
    label: 'Customer Name',
    validations: {
      required: 'Customer name is required',
    },
    placeholder: 'Name',
    type: 'text',
  },
];
