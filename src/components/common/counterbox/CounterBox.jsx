import * as S from './CounterBox.styles';
import { useState } from 'react';

export default function CounterBox(props) {
  const { productPrice } = props;
  const { productStock } = props;
  const { quantity, setQuanity } = props;
  const [price, setPrice] = useState(productPrice);
  // const [stock, setStock] = useState(productStock);

  const increaseQuantity = () => {
    if (quantity < productStock) {
      const newQuantity = quantity + 1;
      setQuanity(newQuantity);
      setPrice(newQuantity * productPrice);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuanity(newQuantity);
      setPrice(newQuantity * productPrice);
    }
  };

  const typingQuantityChange = (event) => {
    const inputValue = event.target.value;

    const newQuantity = inputValue === '' ? '' : parseInt(inputValue, 10) || 1;
    if (newQuantity >= 0 && newQuantity <= productStock) {
      setQuanity(newQuantity);
      setPrice(newQuantity * productPrice);
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString('ko-KR');
  };

  return (
    <S.Counter>
      <S.Box>
        <S.CountTitle>수량</S.CountTitle>
        <S.PrcieWrapper>
          <S.PlusMinus>
            <S.MinusBox onClick={decreaseQuantity}>-</S.MinusBox>
            <S.CountNum>
              <input
                type="number"
                value={quantity}
                onChange={typingQuantityChange}
                style={{ width: '30px', textAlign: 'center' }}
                min="1"
                max={productStock}
              />
            </S.CountNum>
            <S.PlusBox onClick={increaseQuantity}>+</S.PlusBox>
          </S.PlusMinus>
          <S.Price>{formatPrice(price)}원</S.Price>
        </S.PrcieWrapper>
      </S.Box>
      <S.TotoalPrice>
        <h1>총 상품금액</h1>
        <h2>{formatPrice(price)}원</h2>
      </S.TotoalPrice>
    </S.Counter>
  );
}
