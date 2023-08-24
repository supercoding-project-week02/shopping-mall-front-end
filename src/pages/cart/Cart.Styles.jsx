import styled from '@emotion/styled';

export const OuterDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 70px;
  /* border: 1px solid gray; */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TopDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 0px;
  height: 35px;
`;

export const TitleDiv = styled.div`
  font-size: 20px;
  text-align: left;
  margin-right: 10px;
  padding: auto 0px;
`;

export const TotalCountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background-color: #ffb002;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: white;
  padding: 0px;
  margin: -3px;
`;

export const ItemTable = styled.table`
  width: 100%;
  border-top: 1px solid rgba(68, 68, 68, 0.15);
  border-collapse: collapse;
`;

export const Thead = styled.tr`
  color: gray;
  font-weight: normal;
  font-size: 15px;
  border-bottom: 1px solid rgba(68, 68, 68, 0.15);
  /* border-bottom: 1px solid #444444;
    border-left: 1px solid #444444;
    padding: 10px; */
  height: 50px;
`;

export const Td1 = styled.td`
  width: 500px;
  text-align: left;
  padding: 16px 2px;
  margin: 0;
`;

export const Td2 = styled.td`
  width: 200px;
  text-align: center;
`;

export const Td3 = styled.td`
  width: 200px;
  text-align: center;
  /* font-weight: bold; */
  & > * {
    :not(:first-child) {
      font-weight: bold;
    }
  }
`;

export const Td4 = styled.td`
  width: 300px;
  text-align: center;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid rgba(68, 68, 68, 0.15);
  border-left: none;
  padding: 10px;
  height: 110px;
`;

export const ProductDiv = styled.div`
  display: flex;
  margin: 0;
`;

export const DeleteIcon = styled.div`
  margin: 15px 0 0 100px;
  padding: 0;
`;

export const Img = styled.img`
  width: 100px;
  padding: 15px;
`;

export const ProductNameDiv = styled.div`
  padding: 15px;
`;

export const CounterOuterDiv = styled.div`
  display: inline-block;
`;

export const CountDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MinusButton = styled.button`
  /* margin: 20px 0; */
  padding: 0px;
  height: 33px;
  width: 33px;
  border: 1px solid gray;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const PlusButton = styled.button`
  padding: 0px;
  height: 33px;
  width: 33px;
  border: 1px solid gray;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export const CountInput = styled.input`
  padding: 0px;
  height: 31.5px; /* input 과 button 1.5px 차이? */
  width: 50px;
  text-align: center;
  font-size: 15px;
  border-left: none;
  border-right: none;
  /* border: none; */
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
`;

export const Span = styled.span`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const CounterTable = styled.div`
  margin-top: 50px;
  width: 100%;
  padding: 0px;
  text-align: left;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  /* &:div(2nd-child) {
        display: flex;
    } */
`;

export const CounterTitleDiv = styled.div`
  font-weight: normal;
  display: flex;
  border-bottom: 1px solid gray;
  width: 100%;
  font-size: 13px;
  padding: 8px 0px;
  margin: 0px;
`;

export const CounterTitleSpan = styled.span`
  font-weight: bold;
  color: #febc51;
`;

export const CounterMain = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Price = styled.div`
  display: flex;
`;

export const Number = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Exp = styled.div`
  text-align: center;
  font-size: 12px;
  color: gray;
`;

export const DeliveryOuter = styled.div`
  display: flex;
`;

export const Plus = styled.div`
  padding: 0 10px;
`;

export const Delivery = styled.div``;

export const TotalPrice = styled.div`
  display: flex;
`;

export const Equal = styled.div`
  padding: 0 10px;
`;

export const NumberSum = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #febb02;
`;

export const BottomDiv = styled.div``;

export const OrderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const OrderButton = styled.button`
  background-color: black;
  color: white;
  width: 250px;
  height: 50px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const ShopGoDiv = styled.div`
  padding: 8px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ShopGoA = styled.a`
  font-size: 13px;
  color: #febb02;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

export const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 40px auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;
