import React, { useEffect, useState } from 'react';
import * as S from '@/pages/payment/Payment.Styles';
import HasPaidModal from './HasPaidModal';
import { sumTotalPrice } from '../cart/Cart';
import { getShoppingCart } from '@/apis/cart';
import { getUserInfo, getUserPayMoney } from '@/apis/user';
import { purchaseProducts } from '@/apis';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState({
    profileIdx: 0,
    email: '',
    name: '',
    phone: '',
    imageUrl: '',
    payMoney: 0,
    address: null,
    role: '',
  });
  const [charge, setCharge] = useState({
    leftMoney: 0,
  });

  const modalIsOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    getShoppingCart().then((result) => {
      if (result.status === 200) {
        // 여기서 result에 있는 data를 datas 상태값에 적용하는 과정
        setDatas(result.data);
      }
      // 예외처리 작성
    });

    getUserInfo().then((result) => {
      if (result.status === 200) {
        setUser(result.data);
      }
    });

    getUserPayMoney().then((result) => {
      if (result.status === 200) {
        setCharge(result.data);
        console.log('payMoney', result.data);
      }
    });
  }, []);

  const handleSuperPay = () => {
    // 1. 결제 api 호출
    purchaseProducts({
      address: user.address.address,
      addressDetail: user.address.addressDetail,
      receiverName: user.name,
      receiverPhone: user.phone,
    }).then((result) => {
      if (result.status === 200) {
        modalIsOpen();
      }
      console.log(result);
    });
    // 2. 결제가 성공하면 모달창 띄움
  };

  console.log('datas', datas);
  console.log('charge', charge);

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
                <S.ProductCountDiv>{data.quantity}개</S.ProductCountDiv>
                <S.ProductPriceDiv>
                  {Number(data.quantity * data.product.price).toLocaleString('ko-KR')}원
                </S.ProductPriceDiv>
              </S.OrderTextDiv>
            </S.OrderDetailDiv>
          ))}
        </S.OrderInfoBox>

        <S.PersonInfoBox>
          <S.PersonInfo>주문자 정보</S.PersonInfo>
          <S.MemberName>{user.name}</S.MemberName>
          <S.PhoneNumber>{user.phone}</S.PhoneNumber>
          <S.Email>{user.email}</S.Email>
        </S.PersonInfoBox>

        <S.ShipInfoBox>
          <S.ShipInfo>배송 정보</S.ShipInfo>
          <S.MemberName>{user.name}</S.MemberName>
          <S.PhoneNumber>{user.phone}</S.PhoneNumber>
          <S.Address1>{user.address ? user.address.address : ''}</S.Address1>
          <S.Address2>{user.address ? user.address.addressDetail : ''}</S.Address2>
          <S.ZipCode>{user.address ? user.address.zipCode : ''}</S.ZipCode>
          <S.EditButton
            onClick={() => {
              navigate('/mypage');
            }}
          >
            수정
          </S.EditButton>
        </S.ShipInfoBox>

        <S.FixedDiv>
          <S.OrderPriceBox>
            <S.OrderPrice>주문 요약</S.OrderPrice>
            <S.OrderPriceTotalDiv>
              <S.OrderPriceTotalTextDiv>
                <S.Text3>총 주문금액</S.Text3>
              </S.OrderPriceTotalTextDiv>
              <S.OrderPriceTotalSumDiv>
                <S.Price3>{Number(sumTotalPrice(datas)).toLocaleString('ko-KR')}원</S.Price3>
              </S.OrderPriceTotalSumDiv>
            </S.OrderPriceTotalDiv>
          </S.OrderPriceBox>

          <S.SuperPayBox>
            <S.SuperPayTitleDiv>
              <S.SuperPay>슈퍼 페이</S.SuperPay>
              <S.ChargeButton
                onClick={() => {
                  navigate('/mypage');
                }}
              >
                충전하기
              </S.ChargeButton>
            </S.SuperPayTitleDiv>
            <S.OrderPriceContentDiv>
              <S.SuperPayTextDiv>
                <S.Text1>보유 금액</S.Text1>
                <S.Text2>사용 금액</S.Text2>
              </S.SuperPayTextDiv>
              <S.SuperPayNumberDiv>
                <S.Price1>{Number(charge.leftMoney).toLocaleString('ko-KR')}원</S.Price1>
                <S.Price2>-{Number(sumTotalPrice(datas)).toLocaleString('ko-KR')}원</S.Price2>
              </S.SuperPayNumberDiv>
            </S.OrderPriceContentDiv>
            <S.OrderPriceHr />
            <S.OrderPriceTotalDiv>
              <S.SuperPayTotalTextDiv>
                <S.Text3>잔여 금액</S.Text3>
              </S.SuperPayTotalTextDiv>
              <S.OrderPriceTotalSumDiv>
                <S.Price3>
                  {Number(charge.leftMoney - sumTotalPrice(datas)).toLocaleString('ko-KR')}원
                </S.Price3>
              </S.OrderPriceTotalSumDiv>
            </S.OrderPriceTotalDiv>
          </S.SuperPayBox>

          <S.AgreeBox>
            <S.SubAgree>
              <S.SubAgreeInput
                type="checkbox"
                checked={checked}
                onClick={() => {
                  setChecked(!checked);
                }}
              ></S.SubAgreeInput>
              <S.SubAgreeDiv>구매조건 확인 및 결제진행에 동의</S.SubAgreeDiv>
            </S.SubAgree>

            <S.PaySubmitTextDiv>
              <S.PaySubmitButton disabled={!checked || !user.address} onClick={handleSuperPay}>
                결제하기
              </S.PaySubmitButton>
              <HasPaidModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </S.PaySubmitTextDiv>
          </S.AgreeBox>
        </S.FixedDiv>
      </S.WrapperDiv>
    </>
  );
};

export default Payment;
