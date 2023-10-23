export interface ITickets {
  id: string;
  ticket: string;
  customer: string;
  createDate: Date | string;
  deadlineDate: Date | string;
  updatedDate: Date | string;
  priority: string;
}
