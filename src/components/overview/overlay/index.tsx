import { Modal } from '@mui/material';
import ReactDOM from 'react-dom';

interface OverlayProps {
  children: React.ReactElement;
  toggleModal: () => void;
}

export default function Overlay({ children, toggleModal }: OverlayProps) {
  const portalElement = document.getElementById('portal');
  if (portalElement) {
    return ReactDOM.createPortal(
      <Modal open={true} onClose={toggleModal}>
        {children}
      </Modal>,
      portalElement,
    );
  }
  return null;
}
