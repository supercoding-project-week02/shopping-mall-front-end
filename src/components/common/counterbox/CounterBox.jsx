import * as S from './CounterBox.styles';

export default function CounterBox() {
  return (
    <S.Counter>
      <S.Box>
        <S.CountTitle>수량</S.CountTitle>
        <S.PrcieWrapper>
          <S.PlusMinus>
            <S.MinusBox>-</S.MinusBox>
            <S.CountNum>1</S.CountNum>
            <S.PlusBox>+</S.PlusBox>
          </S.PlusMinus>
          <S.Price>19,000원</S.Price>
        </S.PrcieWrapper>
      </S.Box>
      <S.TotoalPrice>
        <h1>총 상품금액</h1>
        <h2>19,000원</h2>
      </S.TotoalPrice>
    </S.Counter>
  );
}
