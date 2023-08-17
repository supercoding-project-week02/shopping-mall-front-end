import { useRef } from 'react';

import Portal from '@/components/common/Portal.jsx';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';
import * as S from './Modal.styles.jsx';

function Modal({ children, visible, onClose }) {
  const className = '';
  const modalRef = useRef(null);
  useOutsideClick({ ref: modalRef, handler: onClose });

  return (
    <Portal selector="#modal-root">
      <S.ModalOverlay visible={visible} />
      <S.ModalWrapper className={className} tabIndex={-1} visible={visible}>
        <S.ModalContainer ref={modalRef} tabIndex={0}>
          {children}
        </S.ModalContainer>
      </S.ModalWrapper>
    </Portal>
  );
}

export default Modal;
