import React from 'react';
import * as S from './CartModal.styles';
import { useNavigate } from 'react-router-dom';

export default function CartModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const modalIsClose = () => {
    setIsOpen(false);
  };

  const navigateCartPage = () => {
    navigate('/cart');
  };

  return (
    <S.ModalBackground isOpen={isOpen}>
      <S.Modal isOpen={isOpen}>
        <S.ModalContent>
          <p>선택하신 상품을 장바구니에 담았습니다.</p>
          <S.ModalBtn>
            <S.KeepShoppingBtn onClick={modalIsClose}>계속쇼핑</S.KeepShoppingBtn>
            <S.GoCartBtn onClick={navigateCartPage}>장바구니</S.GoCartBtn>
          </S.ModalBtn>
        </S.ModalContent>
      </S.Modal>
    </S.ModalBackground>
  );
}
