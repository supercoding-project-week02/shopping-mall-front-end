import styled from '@emotion/styled';

export const Counter = styled.div`
  width: 394px;
`;

export const CountTitle = styled.div`
  margin-bottom: 20px;
  border-bottom: dashed 1px #dddddd;
  padding-bottom: 10px;
`;

export const Box = styled.div`
  width: 394px;
  height: 90px;
  margin-bottom: 10px;
  padding: 15px;
  background-color: #f4f4f4;
  border-radius: 5px;
`;

export const PrcieWrapper = styled.div`
  width: 394px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlusMinus = styled.div`
  display: flex;
`;

export const MinusBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3px;
  width: 24px;
  height: 29px;
  font-size: 20px;
  border: 1px solid #dddddd;
  border-radius: 3px 0 0 3px;
  background-color: white;
  cursor: pointer;
`;

export const CountNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 32px;
  border: 1px solid #dddddd;
  background-color: white;
  input {
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    border-width: 0;
    &:focus {
      outline: none;
    }
  }
`;

export const PlusBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3px;
  width: 24px;
  height: 29px;
  font-size: 20px;
  border: 1px solid #dddddd;
  border-radius: 0 3px 3px 0;
  background-color: white;
  cursor: pointer;
`;

export const Price = styled.div`
  display: flex;
`;

export const TotoalPrice = styled.span`
  width: 424px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  h2 {
    font-size: 30px;
    font-weight: bold;
  }
`;
