import styled from '@emotion/styled';

export default function CounterBox() {
  return (
    <Counter>
      <GameName></GameName>
      <CounterBox>
        <PlusMinus>
          <MinusBox onClick={btnClickDecreaseNum}>-</MinusBox>
          <CountNum></CountNum>
          <PlusBox onClick={btnClickIncreaseNum}>+</PlusBox>
        </PlusMinus>
        <SalePriceText></SalePriceText>
      </CounterBox>
    </Counter>
  );
}

const Counter = styled.div``;

const GameName = styled.div``;

const CounterBox = styled.div``;

const PlusMinus = styled.div`
  width: 424px;
  height: 108px;
  border: 1px;
  border-radius: 3px;
`;

const MinusBox = styled.div`
  font-size: 10px;
  border: 1px;
  border-radius: 3px;
  cursor: pointer;
`;

const CountNum = styled.div``;

const PlusBox = styled.div`
  font-size: 10px;
  border: 1px;
  border-radius: 3px;
  cursor: pointer;
`;

const SalePriceText = styled.div``;
