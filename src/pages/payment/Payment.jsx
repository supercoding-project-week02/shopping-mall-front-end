import React from 'react';
import * as S from '@/pages/payment/Payment.Styles';

const Payment = () => {
    return (
        <>
        <S.PageTitle>결제하기</S.PageTitle>

        <S.WrapperDiv>
                <S.OrderInfoBox>
                    <S.OrderInfo>주문 상품 정보</S.OrderInfo>
                    <S.OrderDetailDiv>

                        <S.Img alt="sample_img" src="https://cdn.imweb.me/thumbnail/20230531/74fe4a1bc360f.jpg" />

                        <S.OrderTextDiv>
                            <S.ProductNameDiv>스쿠반 다용도 폴딩 바스켓</S.ProductNameDiv>
                            <S.ProductCountDiv>1개</S.ProductCountDiv>
                            <S.ProductPriceDiv>21,900원</S.ProductPriceDiv>
                        </S.OrderTextDiv>
                    </S.OrderDetailDiv>

                    <S.ShipTextDiv>배송비 <S.ShipSpan>3,000원</S.ShipSpan></S.ShipTextDiv>
                </S.OrderInfoBox>

                <S.PersonInfoBox>
                    <S.PersonInfo>주문자 정보</S.PersonInfo>
                    <S.MemberName>홍길동</S.MemberName>
                    <S.PhoneNumber>01012345678</S.PhoneNumber>
                    <S.Email>board-game@supercoding.kr</S.Email>
                    <S.PersonModifyA>수정</S.PersonModifyA>
                </S.PersonInfoBox>

                <S.ShipInfoBox>
                    <S.ShipInfo>배송 정보</S.ShipInfo>
                    <S.MemberName>홍길동</S.MemberName>
                    <S.PhoneNumber>010-1234-5678</S.PhoneNumber>
                    <S.Address1>제주시 가나다동 춘식이아파트</S.Address1>
                    <S.Address2>1동 101호</S.Address2>
                    <S.ZipCode>(12345)</S.ZipCode>
                    <S.AddressModifyA>변경</S.AddressModifyA>
                    <S.ShipMemo>배송메모</S.ShipMemo>
                    <S.ShipMemoSelectBox>
                        <S.MemoOption>배송메모를 선택해 주세요.</S.MemoOption>
                        <S.MemoOption>배송 전에 미리 연락 바랍니다.</S.MemoOption>
                        <S.MemoOption>부재 시 경비실에 맡겨 주세요.</S.MemoOption>
                        <S.MemoOption>부재 시 전화나 문자를 남겨 주세요.</S.MemoOption>
                        <S.MemoOption>직접입력</S.MemoOption>
                    </S.ShipMemoSelectBox>
                </S.ShipInfoBox>

                <S.FixedDiv>

                    <S.OrderPriceBox>
                        <S.OrderPrice>주문 요약</S.OrderPrice>
                        <S.OrderPriceContentDiv>
                            <S.OrderPriceTextDiv>
                                <S.Text1>상품가격</S.Text1>
                                <S.Text2>배송비</S.Text2>
                            </S.OrderPriceTextDiv>
                            <S.OrderPriceNumberDiv>
                                <S.OrderPrice1>219,000원</S.OrderPrice1>
                                <S.OrderPrice2>+3,000원</S.OrderPrice2>
                            </S.OrderPriceNumberDiv>
                        </S.OrderPriceContentDiv>
                        <S.OrderPriceHr />
                        <S.OrderPriceTotalDiv>
                            <S.OrderPriceTotalTextDiv>
                                <S.Text3>총 주문금액</S.Text3>
                            </S.OrderPriceTotalTextDiv>
                            <S.OrderPriceTotalSumDiv>
                                <S.Price3>249,000원</S.Price3>
                            </S.OrderPriceTotalSumDiv>
                        </S.OrderPriceTotalDiv>
                    </S.OrderPriceBox>

                    <S.SuperPayBox>
                    <S.SuperPay>슈퍼 페이</S.SuperPay>
                    <S.OrderPriceContentDiv>
                            <S.SuperPayTextDiv>
                                <S.Text1>보유 금액</S.Text1>
                                <S.Text2>사용 금액</S.Text2>
                            </S.SuperPayTextDiv>
                            <S.SuperPayNumberDiv>
                                <S.Price1>1,000,000원</S.Price1>
                                <S.Price2>-249,000원</S.Price2>
                            </S.SuperPayNumberDiv>
                        </S.OrderPriceContentDiv>
                        <S.OrderPriceHr />
                        <S.OrderPriceTotalDiv>
                            <S.SuperPayTotalTextDiv>
                                <S.Text3>잔여 금액</S.Text3>
                            </S.SuperPayTotalTextDiv>
                            <S.OrderPriceTotalSumDiv>
                                <S.Price3>751,000원</S.Price3>
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
                            <S.PaySubmitA>결제하기</S.PaySubmitA>
                        </S.PaySubmitTextDiv>
                    </S.AgreeBox>

                </S.FixedDiv>
        </S.WrapperDiv>
        </>
    );
};

export default Payment;