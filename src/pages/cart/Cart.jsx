import React, { useEffect, useState } from 'react';
import * as S from './Cart.Styles';
import { Icon } from '@/components/common/Icon/Icon';
import { useRecoilValue } from 'recoil';
import { cartAtom, TotalPriceSelector, TotalQuantitySelector } from '@/recoil/atoms/cartAtom';
import { deleteShopoingCart, getShoppingCart, modifyShoppingCart } from '@/apis/cart';
import { client } from '@/apis';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  const [datas, setDatas] = useState(null);
  const [user, setUser] = useState(null);

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
        if (Array.isArray(response.data) && response.data.length === 0) {
          setUser(null);
        } else {
          setUser(response.data);
        }

        // console.log('정상 수신 data', response.data);
      }
    });
  }, []);

  console.log('datas', datas);

  const handleDeleteCart = (cartId) => {
    deleteShopoingCart({
      shoppingCartIdSet: [cartId],
    }).then((result) => {
      if (result.status === 200) {
        const deletedDatas = datas.filter((item) => item.id !== cartId);
        setDatas(deletedDatas);
        // 리렌더링 되면서 새로고침되는 느낌처럼 구현? (새로고침은 아님) 넵
      }
    });
  };

  const handlePlusButton = (index, amount, productId) => {
    if (amount >= datas[index].product.leftQuantity) return;

    modifyShoppingCart({
      amount: amount + 1,
      productId: productId,
    }).then((result) => {
      if (result.status === 200) {
        let plusData = datas.map((item) => {
          if (item.product.id === productId) {
            item.quantity += 1;
            return item;
          }
          return item;
        });
        setDatas(plusData);
      }
    });
  };

  const handleMinusButton = (index, amount, productId) => {
    if (amount <= 1) return;

    modifyShoppingCart({
      amount: amount - 1,
      productId: productId,
    }).then((result) => {
      console.log(result);
      if (result.status === 200) {
        let plusData = datas.map((item) => {
          if (item.product.id === productId) {
            item.quantity -= 1;
            return item;
          }
          return item;
        });
        setDatas(plusData);
      }
    });
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
        {datas &&
          datas.map((data, index) => (
            <S.Tr key={index}>
              <S.ProductDiv>
                <S.Img alt="sample_img" src={data.product.mainImageUrl} />
                <S.ProductNameDiv>{data.product.title}</S.ProductNameDiv>
                <S.DeleteIcon>
                  <Icon
                    name="IconX"
                    size={12}
                    onClick={() => {
                      handleDeleteCart(data.id);
                    }}
                  />
                </S.DeleteIcon>
              </S.ProductDiv>
              <S.Td2>
                <S.CounterOuterDiv>
                  <S.CountDiv>
                    <S.MinusButton
                      onClick={() => {
                        handleMinusButton(index, data.quantity, data.product.id);
                      }}
                    >
                      <S.Span>-</S.Span>
                    </S.MinusButton>
                    <S.CountInput type="text" title="number" value={data.quantity} />
                    <S.PlusButton
                      onClick={() => {
                        handlePlusButton(index, data.quantity, data.product.id);
                      }}
                    >
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

export function sumTotalPrice(datas) {
  let sum = 0;
  for (let i = 0; i < datas.length; i++) {
    sum += datas[i].quantity * datas[i].product.price;
  }
  return sum;
}
