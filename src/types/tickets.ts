export interface ITickets {
  id: string;
  ticket: string;
  customer: string;
  createDate: Date | string;
  deadlineDate: Date | string;
  updatedDate: Date | string;
  priority: string;
}
export interface IUpdateTickets {
  id?: string;
  ticket?: string;
  customer?: string;
  createDate?: Date | string;
  deadlineDate?: Date | string;
  updatedDate?: Date | string;
  priority?: string;
}
export interface ITicketInitialValues {
  name: string;
  description: string;
  priority: string;
  deadlineDate: Date | string;
  [key: string]: string | Date;
}
export interface IPatchTickets {
  id?: string;
  ticket?: string;
  customer?: string;
  createDate?: Date | string;
  deadlineDate?: Date | string;
  updatedDate?: Date | string;
  priority?: string;
}
