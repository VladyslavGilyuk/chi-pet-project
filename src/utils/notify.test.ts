import { Notify } from './notify';
import { toast } from 'react-toastify';

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe('Notify function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('calls toast.error with the correct parameters', () => {
    Notify('Test Message', 'top-left', 3000);

    expect(toast.error).toHaveBeenCalledWith('Test Message', {
      position: 'top-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  });
});
