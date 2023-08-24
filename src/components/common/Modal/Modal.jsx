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

  // GYU-TODO: useOutsideClick 은 성능 이슈 있음, 그래서 overlay 에 onClick 으로 처리
  // useOutsideClick({ ref: modalRef, handler: onClose });

  // GYU-TODO: 스크롤 이벤트 방지하기
  return (
    <Portal selector="#modal-root">
      <S.ModalOverlay
        className={className}
        tabIndex={-1}
        visible={visible}
        onClick={() => {
          console.log('click2');
          onClose();
        }}
      >
        <S.ModalContainer ref={modalRef} tabIndex={0}>
          {children}
        </S.ModalContainer>
      </S.ModalOverlay>
    </Portal>
  );
}

export default Modal;
