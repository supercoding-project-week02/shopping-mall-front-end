import React, { useState } from "react";
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

                        <S.AddressModifyA>
                            변경
                        </S.AddressModifyA>

                    <S.ShipMemo>배송메모</S.ShipMemo>
                    <S.ShipMemoSelectBox>
                        <S.MemoOption>배송메모를 선택해 주세요.</S.MemoOption>
                        <S.MemoOption>배송 전에 미리 연락 바랍니다.</S.MemoOption>
                        <S.MemoOption>부재 시 경비실에 맡겨 주세요.</S.MemoOption>
                        <S.MemoOption>부재 시 전화나 문자를 남겨 주세요.</S.MemoOption>
                        <S.MemoOption>직접입력</S.MemoOption>
                    </S.ShipMemoSelectBox>
                </S.ShipInfoBox>   
        </>
    );
};

export default PaymentShipInfo;


