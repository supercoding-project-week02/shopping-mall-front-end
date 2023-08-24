import React from 'react';
import * as S from '@/pages/payment/Payment.Styles';
import DaumPost from './DaumPost';

const PaymentShipChgClick = () => {
  return (
    <div>
      <S.ShipInfoBox>
        <S.ShipInfo>배송 정보</S.ShipInfo>
        <S.NamePhoneOuterDiv>
          <S.NameInput type="text" placeholder="수령인" />
          <S.PhoneInput type="text" placeholder="연락처" />
        </S.NamePhoneOuterDiv>
        <S.ZipCodeFindOuterDiv>
          <S.ZipCodeInput type="text" placeholder="우편번호" />
          <DaumPost />
        </S.ZipCodeFindOuterDiv>
        <S.AdrsInput type="text" placeholder="주소" />
        <S.DetailAdrsInput type="text" placeholder="상세주소" />
        <S.AdrsSaveDiv>
          <S.AdrsSaveButton>입력완료</S.AdrsSaveButton>
        </S.AdrsSaveDiv>
      </S.ShipInfoBox>
    </div>
  );
};

export default PaymentShipChgClick;
