import { AppDispatch } from '../store';
import { FieldValues } from 'react-hook-form';
import { URLSearchParamsInit } from 'react-router-dom';

export interface IContactState {
  id: string;
  email: string;
  address: string;
  createDate: Date | string;
  firstName: string;
  lastName: string;
  createdBy: {
    name: string;
    imageUrl: string;
    id: string;
  };
}
export interface IContacts {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  createDate: Date | string;
}

export interface IPatchContacts {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
}
export interface IUpdateContacts {
  // check it later  for the necessity of usage
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  address?: string;
}
export interface IContactsDB {
  id: string;
  email: string;
  address: string;
  createDate: Date | string;
  createdBy: {
    firstName: string;
    lastName: string;
    imageUrl: string;
    id: string;
  };
}

export interface IContactInitialValues {
  id: string;
  email: string;
  address: string;
  createDate: Date | string;
  createdBy: {
    firstName: string;
    lastName: string;
    imageUrl: string;
    id: string;
  };
  [key: string]: string | Date | object;
}

export type CustomToolbarProps = {
  dispatch: AppDispatch;
  fetchTickets: () => void;
  toggleModal: () => void;
  setSearchParams: (callback: (prev: URLSearchParams) => URLSearchParamsInit) => void;
  isModalOpen: boolean;
};

export interface IContactFieldValues extends FieldValues {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  createDate: Date | string;
}
