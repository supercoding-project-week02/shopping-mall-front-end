import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './HasPaidModal.styles';

export default function HasPaidModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const navigateToMainPage = () => {
    navigate('/');
  };

  return (
    <S.ModalBackground isOpen={isOpen}>
      <S.Modal isOpen={isOpen}>
        <S.ModalContent>
          <p>결제가 완료 되었습니다.</p>
          <S.ModalBtn>
            <S.MoveToMainBtn onClick={navigateToMainPage}>메인페이지로 이동</S.MoveToMainBtn>
          </S.ModalBtn>
        </S.ModalContent>
      </S.Modal>
    </S.ModalBackground>
  );
}

// 다하면 components 에 모달 파일 이동! styles 와 함께
