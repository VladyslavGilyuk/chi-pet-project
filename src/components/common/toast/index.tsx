import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export const notify = () =>
  toast.error('Invalid email or password', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const ToastError: React.FC = () => {
  return (
    <ToastContainer
      position='top-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  );
};

export default ToastError;
