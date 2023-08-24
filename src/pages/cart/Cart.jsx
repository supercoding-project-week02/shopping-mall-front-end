import React, { useEffect, useState } from 'react';
import * as S from './Cart.Styles';
import { Icon } from '@/components/common/Icon/Icon';
import { useRecoilValue } from 'recoil';
import { cartAtom, TotalPriceSelector, TotalQuantitySelector } from '@/recoil/atoms/cartAtom';
import CartItem from './CartItem';
import { getShoppingCart } from '@/apis/cart';
import { client } from '@/apis';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  // 전역 상태 관리소의 값을 불러오기
  const cartItem = useRecoilValue(cartAtom);

  //? 파생 데이터인 셀렉터를 이용하기

  // 총 수량
  const TotalQuantity = useRecoilValue(TotalQuantitySelector);

  // 총액
  const TotalPrice = useRecoilValue(TotalPriceSelector);

  const [datas, setDatas] = useState(null);
  const [user, setUser] = useState(null);

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    getShoppingCart().then((result) => {
      if (result.status === 200) {
        // 여기서 result에 있는 data를 datas 상태값에 적용하는 과정
        setDatas(result.data);
      }

      // 예외처리 작성
    });

    // '/user/info' 데이터를 console.log 로 찍어주세요!
    client.get('user/info').then((result) => {
      const response = result.data;
      console.log('response', response);
      if (response.status === 200) {
        setUser(response.data);
        // console.log('정상 수신 data', response.data);
      }
    });
  }, []);

  console.log('datas', datas);

  const handleDeleteCart = () => {
    client
      .delete('/shoppingcart')
      .then((result) => {
        const response = result.data;
        const data = response.data;
        console.log('response', response, 'data', data);
      })
      .catch((error) => console.error(error));

    client.alert('삭제 완료');
  };

  const handlePay = () => {
    // TODO: 결제 하기 로직 추가
    // [] 배열 => 복수개의 아이템!
    // {} 객체 => key - value

    if (!user) return;

    client
      .post('/payments', {
        address: user.address.address,
        addressDetail: user.address.addressDetail,
        receiverName: user.address.name,
        receiverPhone: user.address.phone,
      })
      .then((result) => {
        const response = result.data;
        console.log('결제하기', response);
      });
  };

  if (!datas) return null;
  // datas 는 장바구니의 배열 리스트(복수개)
  return (
    <S.OuterDiv>
      <S.TopDiv>
        <S.TitleDiv>장바구니</S.TitleDiv>
        <S.TotalCountDiv>{datas.length}</S.TotalCountDiv>
      </S.TopDiv>
      <S.ItemTable>
        <S.Thead>
          <S.Td1>상품 정보</S.Td1>
          <S.Td2>수량</S.Td2>
          <S.Td3>주문금액</S.Td3>
        </S.Thead>
        {datas.map((data) => (
          <S.Tr>
            <S.ProductDiv>
              <S.Img alt="sample_img" src={data.product.mainImageUrl} />
              <S.ProductNameDiv>{data.product.title}</S.ProductNameDiv>
              <S.DeleteIcon>
                <Icon name="IconX" size={12} onClick={handleDeleteCart} />
              </S.DeleteIcon>
            </S.ProductDiv>
            <S.Td2>
              <S.CounterOuterDiv>
                <S.CountDiv>
                  <S.MinusButton onClick={onDecrease}>
                    <S.Span>-</S.Span>
                  </S.MinusButton>
                  <S.CountInput type="text" title="number" value={data.quantity} />
                  <S.PlusButton onClick={onIncrease}>
                    <S.Span>+</S.Span>
                  </S.PlusButton>
                </S.CountDiv>
              </S.CounterOuterDiv>
            </S.Td2>
            <S.Td3>{data.product.price * data.quantity}</S.Td3>
          </S.Tr>
        ))}
      </S.ItemTable>
      <S.CounterTable>
        <S.CounterTitleDiv>
          총 주문 상품&nbsp;
          <S.CounterTitleSpan>
            {/* {datas.reduce((acc, cur) => (acc += cur.quantity), 0)} */}
            {getTotalQuantity(datas)}
          </S.CounterTitleSpan>
          개
        </S.CounterTitleDiv>
        <S.CounterMain>
          {/* <S.Price>
            <div>
              <S.Number>{datas[0].product.price}</S.Number>
              <S.Exp>상품금액</S.Exp>
            </div>
          </S.Price> */}
          <S.DeliveryOuter>{/* <S.Plus>+</S.Plus> */}</S.DeliveryOuter>
          <S.TotalPrice>
            {/* <S.Equal>=</S.Equal> */}
            <div>
              <S.NumberSum>{sumTotalPrice(datas)}</S.NumberSum>
              <S.Exp>총 주문금액</S.Exp>
            </div>
          </S.TotalPrice>
        </S.CounterMain>
      </S.CounterTable>
      <S.BottomDiv>
        <S.OrderDiv>
          <S.OrderButton
            onClick={() => {
              handlePay;
              navigate('/payment');
            }}
          >
            주문하기
          </S.OrderButton>
        </S.OrderDiv>
        <S.ShopGoDiv>
          <S.ShopGoA
            onClick={() => {
              navigate('/');
            }}
          >
            계속 쇼핑하기
          </S.ShopGoA>
        </S.ShopGoDiv>
      </S.BottomDiv>
    </S.OuterDiv>
  );
};

function getTotalQuantity(datas) {
  // datas.reduce((acc, cur) => (acc += cur.quantity), 0)
  let total = 0;
  for (let i = 0; i < datas.length; i++) {
    total += datas[i].quantity;
  }
  return total;
}

export default Cart;

// 총합 : 개수*아이템 별 + 더하기 함수 만들어서 적용!

function sumTotalPrice(datas) {
  let sum = 0;
  for (let i = 0; i < datas.length; i++) {
    sum += datas[i].quantity * datas[i].product.price;
  }
  return sum;
}
