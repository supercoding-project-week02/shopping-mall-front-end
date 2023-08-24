import React, { useEffect, useState } from 'react';
import * as S from '@/pages/payment/Payment.Styles';
import PaymentShipMove from './PaymentShipMove';
import HasPaidModal from './HasPaidModal';

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [datas, setDatas] = useState(null);
  const [user, setUser] = useState(null);
  const [charge, setCharge] = useState(null);

  const modalIsOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    getPurchaseHistory().then((result) => {
      if (result.status === 200) {
        // 여기서 result에 있는 data를 datas 상태값에 적용하는 과정
        setDatas(result.data);
      }

      // 예외처리 작성
      else {
        console.error(error);
      }
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

    // '/user/recharge' 데이터 끌어오기
    client.get('user/recharge').then((result) => {
      const response = result.data;
      console.log('response', response);
      if (response.status === 200) {
        setCharge(response.data);
      }
    });
  }, []);

  console.log('datas', datas);

  return (
    <>
      <S.PageTitle>결제하기</S.PageTitle>

      <S.WrapperDiv>
        <S.OrderInfoBox>
          <S.OrderInfo>주문 상품 정보</S.OrderInfo>
          {datas.map((data) => (
            <S.OrderDetailDiv>
              <S.Img alt="sample_img" src={data.product.mainImageUrl} />

              <S.OrderTextDiv>
                <S.ProductNameDiv>{data.product.title}</S.ProductNameDiv>
                <S.ProductCountDiv>{data.purchaseQuantity}개</S.ProductCountDiv>
                <S.ProductPriceDiv>{data.purchasePrice}원</S.ProductPriceDiv>
              </S.OrderTextDiv>
            </S.OrderDetailDiv>
          ))}
        </S.OrderInfoBox>

        <S.PersonInfoBox>
          <S.PersonInfo>주문자 정보</S.PersonInfo>
          <S.MemberName>{user.address.name}</S.MemberName>
          <S.PhoneNumber>{user.address.phone}</S.PhoneNumber>
          <S.Email>{user.address.email}</S.Email>
        </S.PersonInfoBox>

        <S.ShipInfoBox>
          <S.ShipInfo>배송 정보</S.ShipInfo>
          <S.MemberName>{user.address.name}</S.MemberName>
          <S.PhoneNumber>{user.address.phone}</S.PhoneNumber>
          <S.Address1>{user.address.address}</S.Address1>
          <S.Address2>{user.address.addressDetail}</S.Address2>
          <S.ZipCode>{user.address.zipCode}</S.ZipCode>
        </S.ShipInfoBox>

        <S.FixedDiv>
          <S.OrderPriceBox>
            <S.OrderPrice>주문 요약</S.OrderPrice>
            <S.OrderPriceContentDiv>
              <S.OrderPriceTextDiv>
                <S.Text1>상품가격</S.Text1>
              </S.OrderPriceTextDiv>
              <S.OrderPriceNumberDiv>
                <S.OrderPrice1>원</S.OrderPrice1>
              </S.OrderPriceNumberDiv>
            </S.OrderPriceContentDiv>
            <S.OrderPriceHr />
            <S.OrderPriceTotalDiv>
              <S.OrderPriceTotalTextDiv>
                <S.Text3>총 주문금액</S.Text3>
              </S.OrderPriceTotalTextDiv>
              <S.OrderPriceTotalSumDiv>
                <S.Price3>{sumTotalPrice(datas)}원</S.Price3>
              </S.OrderPriceTotalSumDiv>
            </S.OrderPriceTotalDiv>
          </S.OrderPriceBox>

          <S.SuperPayBox>
            <S.SuperPayTitleDiv>
              <S.SuperPay>슈퍼 페이</S.SuperPay>
              <S.ChargeButton>충전하기</S.ChargeButton>
            </S.SuperPayTitleDiv>
            <S.OrderPriceContentDiv>
              <S.SuperPayTextDiv>
                <S.Text1>보유 금액</S.Text1>
                <S.Text2>사용 금액</S.Text2>
              </S.SuperPayTextDiv>
              <S.SuperPayNumberDiv>
                <S.Price1>{charge.data.leftMoney}원</S.Price1>
                <S.Price2>-{sumTotalPrice(datas)}원</S.Price2>
              </S.SuperPayNumberDiv>
            </S.OrderPriceContentDiv>
            <S.OrderPriceHr />
            <S.OrderPriceTotalDiv>
              <S.SuperPayTotalTextDiv>
                <S.Text3>잔여 금액</S.Text3>
              </S.SuperPayTotalTextDiv>
              <S.OrderPriceTotalSumDiv>
                <S.Price3>{charge.data.leftMoney - sumTotalPrice(datas)}원</S.Price3>
              </S.OrderPriceTotalSumDiv>
            </S.OrderPriceTotalDiv>
          </S.SuperPayBox>

          <S.AgreeBox>
            <S.AllAgree>
              <S.AllAgreeInput type="checkbox"></S.AllAgreeInput>
              <S.AllAgreeDiv>전체 동의</S.AllAgreeDiv>
            </S.AllAgree>

            <S.SubAgree>
              <S.SubIndicateDiv>
                <S.BoxLineDiv></S.BoxLineDiv>
              </S.SubIndicateDiv>
              <S.SubAgreeInput type="checkbox"></S.SubAgreeInput>
              <S.SubAgreeDiv>구매조건 확인 및 결제진행에 동의</S.SubAgreeDiv>
            </S.SubAgree>

            <S.PaySubmitTextDiv>
              <S.PaySubmitA onClick={modalIsOpen}>결제하기</S.PaySubmitA>
              <HasPaidModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </S.PaySubmitTextDiv>
          </S.AgreeBox>
        </S.FixedDiv>
      </S.WrapperDiv>
    </>
  );
};

export default Payment;
