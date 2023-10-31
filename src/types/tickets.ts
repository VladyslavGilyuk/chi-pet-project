import { AppDispatch } from '../store';
import { URLSearchParamsInit } from 'react-router-dom';
export interface ITicketState {
  id: string;
  ticket: string;
  customer: string;
  createDate: Date | string;
  deadlineDate: Date | string;
  updatedDate: Date | string;
  priority: string;
  createdBy: {
    name: string;
    imageUrl: string;
    id: string;
  };
}
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
  ticket: string;
  customer: string;
  createDate: Date | string;
  deadlineDate: Date | string;
  updatedDate: Date | string;
  priority: string;
  createdBy: {
    name: string;
    imageUrl: string;
    id: string;
  };
  [key: string]: string | Date | object;
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

export type CustomToolbarProps = {
  dispatch: AppDispatch;
  fetchTickets: () => void;
  toggleModal: () => void;
  setSearchParams: (callback: (prev: URLSearchParams) => URLSearchParamsInit) => void;
  selectedPriorities: string[];
  setSelectedPriorities: React.Dispatch<React.SetStateAction<string[]>>;
  isModalOpen: boolean;
};
