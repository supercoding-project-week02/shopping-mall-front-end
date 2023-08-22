import React, { useState } from "react";
import * as S from '@/pages/payment/Payment.Styles';
import DaumPost from "./DaumPost";

const PaymentShipChgClick = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        {
            tabTitle:(
                <S.Li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 기본 배송지 </S.Li>
            ),
            tabCont:(
                <div>
                    <S.Outer>
                        <S.MemberName>홍길동</S.MemberName>
                        <S.PhoneNumber>010-1234-5678</S.PhoneNumber>
                        <S.Address1>제주시 가나다동 춘식이아파트</S.Address1>
                        <S.Address2>1동 101호</S.Address2>
                        <S.ZipCode>(12345)</S.ZipCode>
                    </S.Outer>

                        <S.TabInnerAdrsModifyA>
                            수정
                        </S.TabInnerAdrsModifyA>

                    <S.ShipMemo>배송메모</S.ShipMemo>
                    <S.ShipMemoSelectBox>
                        <S.MemoOption>배송메모를 선택해 주세요.</S.MemoOption>
                        <S.MemoOption>배송 전에 미리 연락 바랍니다.</S.MemoOption>
                        <S.MemoOption>부재 시 경비실에 맡겨 주세요.</S.MemoOption>
                        <S.MemoOption>부재 시 전화나 문자를 남겨 주세요.</S.MemoOption>
                        <S.MemoOption>직접입력</S.MemoOption>
                    </S.ShipMemoSelectBox>
                </div>
            )
        },
        {
            tabTitle:(
                <S.Li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 신규입력 </S.Li>
            ),
            tabCont:(


                <div>
                    <S.TopOuterDiv>
                        <S.TopCheckBox type="checkbox" />
                        <S.InfoEqualDiv>주문자 정보와 동일</S.InfoEqualDiv>
                    </S.TopOuterDiv>
                    <S.NamePhoneOuterDiv>
                        <S.NameInput type="text" placeholder="수령인" />
                        <S.PhoneInput type="text" placeholder="연락처" />
                    </S.NamePhoneOuterDiv>
                    <S.ZipCodeFindOuterDiv>
                        <S.ZipCodeInput type="text" placeholder="우편번호" />
                        <DaumPost />
                        {/* <S.AdrsFindButton>주소찾기</S.AdrsFindButton> */}
                    </S.ZipCodeFindOuterDiv>
                    <S.AdrsInput type="text" placeholder="주소" />
                    <S.DetailAdrsInput type="text" placeholder="상세주소" />
                    <S.BottomOuterDiv>
                        <S.BottomCheckBox type="checkbox" />
                        <S.AddAdrsListDiv>배송지 목록에 추가</S.AddAdrsListDiv>
                    </S.BottomOuterDiv>
                    <S.BottomSecondOuterDiv>
                        <S.BottomCheckBox type="checkbox" />
                        <S.SetFixedAdrsDiv>기본 배송지로 설정</S.SetFixedAdrsDiv>
                    </S.BottomSecondOuterDiv>


                <S.ShipMemo>배송메모</S.ShipMemo>
                <S.ShipMemoSelectBox>
                    <S.MemoOption>배송메모를 선택해 주세요.</S.MemoOption>
                    <S.MemoOption>배송 전에 미리 연락 바랍니다.</S.MemoOption>
                    <S.MemoOption>부재 시 경비실에 맡겨 주세요.</S.MemoOption>
                    <S.MemoOption>부재 시 전화나 문자를 남겨 주세요.</S.MemoOption>
                    <S.MemoOption>직접입력</S.MemoOption>
                </S.ShipMemoSelectBox>
                </div>

            )
        }
    ];

    return (
        <S.ShipInfoBox>
        <S.ShipInfo>배송 정보</S.ShipInfo>
            <S.BodyDiv>
            <S.Ul className="tabs is-boxed">
                {tabContArr.map((section, index)=>{
                    return section.tabTitle
                })}
            </S.Ul>
            <S.ContentDiv>
                {tabContArr[activeIndex].tabCont}
            </S.ContentDiv>
            </S.BodyDiv>
        </S.ShipInfoBox>  
    );
};

export default PaymentShipChgClick;

