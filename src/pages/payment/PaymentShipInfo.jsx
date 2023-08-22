import React, { useState } from 'react';
import * as S from '@/pages/payment/Payment.Styles';

const PaymentShipInfo = () => {
  return (
    <>
      <S.ShipInfoBox>
        <S.ShipInfo>배송 정보</S.ShipInfo>
        <S.MemberName>홍길동</S.MemberName>
        <S.PhoneNumber>010-1234-5678</S.PhoneNumber>
        <S.Address1>제주시 가나다동 춘식이아파트</S.Address1>
        <S.Address2>1동 101호</S.Address2>
        <S.ZipCode>(12345)</S.ZipCode>
      </S.ShipInfoBox>
    </>
  );
};

export default PaymentShipInfo;
