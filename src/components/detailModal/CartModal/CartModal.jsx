import React from 'react';
import * as S from './CartModal.styles';

export default function CartModal({ isOpen, setIsOpen }) {
  const modalIsClose = () => {
    setIsOpen(false);
  };

  return (
    <S.ModalBackground isOpen={isOpen}>
      <S.Modal isOpen={isOpen}>
        <S.ModalContent>
          <p>선택하신 상품을 장바구니에 담았습니다.</p>
          <S.ModalBtn>
            <S.KeepShoppingBtn onClick={modalIsClose}>계속쇼핑</S.KeepShoppingBtn>
            <S.GoCartBtn>장바구니</S.GoCartBtn>
          </S.ModalBtn>
        </S.ModalContent>
      </S.Modal>
    </S.ModalBackground>
  );
}
