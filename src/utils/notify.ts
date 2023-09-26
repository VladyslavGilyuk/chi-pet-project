import { ToastPosition, toast } from 'react-toastify';

type NotifyFunction = (message: string, position?: ToastPosition, closeDelay?: number) => void;

export const Notify: NotifyFunction = (
  message: string,
  position: ToastPosition = 'top-center',
  closeDelay: number = 2000,
) =>
  toast.error(message, {
    position: position,
    autoClose: closeDelay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
