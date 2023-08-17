import React from 'react';
import * as S from './Cart.Styles';
import { Icon } from '@/components/common/Icon/Icon';

// import { ReactComponent as DeleteButton } from "/../assets/cart/delete.svg";

// 저 왔습니다!!
const Cart = () => {

    const icon = () => {
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    }

    // 
    return (
        <S.OuterDiv>
            <S.TopDiv>
                <S.TitleDiv>장바구니</S.TitleDiv>
                <S.TotalCountDiv>1</S.TotalCountDiv>
            </S.TopDiv>
            <S.ItemTable>
                <S.Thead>
                    <S.Td1>상품 정보 <Icon name="IconTest" size={50} onClick={() => alert('아이콘 클릭')}  /></S.Td1>
                    <S.Td2>수량</S.Td2>
                    <S.Td3>주문금액</S.Td3>
                    <S.Td4>배송 정보</S.Td4>
                </S.Thead>
                <S.Tr>
                    <S.ProductDiv>
                            <S.Img alt="sample_img" src="https://cdn.imweb.me/thumbnail/20230531/74fe4a1bc360f.jpg" />
                        <S.ProductNameDiv>스쿠반 다용도 폴딩 바스켓</S.ProductNameDiv>
                        {/* <DeleteButton>{icon()}</DeleteButton> */}
                    </S.ProductDiv>
                    <S.Td2> 
                        <S.CounterOuterDiv>
                            <S.CountDiv>
                                <S.MinusButton>
                                <S.Span>-</S.Span>
                                </S.MinusButton>				
                                
                                <S.CountInput type="text" title="number" value="1" />
                                
                                <S.PlusButton>
                                <S.Span>+</S.Span>
                                </S.PlusButton>	
                            </S.CountDiv>
                        </S.CounterOuterDiv>
                    </S.Td2>
                    <S.Td3>21,900원</S.Td3>
                    <S.Td4>3,000원</S.Td4>
                </S.Tr>
            </S.ItemTable>
            <S.CounterTable>
                    <S.CounterTitleDiv>총 주문 상품&nbsp;<S.CounterTitleSpan>1</S.CounterTitleSpan>개</S.CounterTitleDiv>
                    <S.CounterMain>
                        <S.Price>
                        <div>
                            <S.Number>21,900원</S.Number>
                            <S.Exp>상품금액</S.Exp>
                        </div>
                        </S.Price>
                        <S.DeliveryOuter>
                        <S.Plus>+</S.Plus>
                        <S.Delivery>
                            <S.Number>3,000원</S.Number>
                            <S.Exp>배송비</S.Exp>
                        </S.Delivery>
                        </S.DeliveryOuter>
                        <S.TotalPrice>
                        <S.Equal>=</S.Equal>
                        <div>
                            <S.NumberSum>24,900원</S.NumberSum>
                            <S.Exp>총 주문금액</S.Exp>
                        </div>
                        </S.TotalPrice>
                    </S.CounterMain>
                </S.CounterTable>
                <S.BottomDiv>
                    <S.OrderDiv>
                        <S.OrderButton>주문하기</S.OrderButton>
                    </S.OrderDiv>
                    <S.ShopGoDiv>
                        <S.ShopGoA>계속 쇼핑하기</S.ShopGoA>
                    </S.ShopGoDiv>
                </S.BottomDiv>

        </S.OuterDiv>
    );
};

export default Cart;