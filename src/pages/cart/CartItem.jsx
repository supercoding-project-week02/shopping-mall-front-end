import React from 'react';
import * as S from './CartItem.Styles';
import dummyImage from '@/assets/genre/cartoon.svg';
import { useSetRecoilState } from 'recoil';
import { cartAtom } from '@/recoil/atoms/cartAtom';

const CartItem = ({ data }) => {
  const setCartItem = useSetRecoilState(cartAtom);
  const { id, title, price } = data;

  const removeFromCart = () => {
    setCartItem((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <S.Wrapper>
      <div>
        <S.ImageWrapper src={dummyImage} alt={title}></S.ImageWrapper>
        <S.ColumnWrapper>
          <S.Title>{title}</S.Title>
        </S.ColumnWrapper>
      </div>
      <S.RightWrapper>
        <S.Title>{`${price.toLocaleString()}원`}</S.Title>
        <S.Button onClick={removeFromCart}>삭제</S.Button>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

export default CartItem;
