import { useRef } from 'react';

import Portal from '@/components/common/Portal.jsx';
import { useOutsideClick } from '@/hooks/useOutsideClick.js';
import * as S from './Modal.styles.jsx';

/**
 * @desc 기본 Modal UI 를 담당합니다. 모달 영역 밖은 dimmed UI 를 표시하고 modal contents 영역을 표현합니다.
 * @example
 * <Modal visible={visible} onClose={onClose}>
 *     <ModalHeader />
 *     <ModalContent>컨텐츠 내용</ModalContent>
 * </Modal>
 */
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
