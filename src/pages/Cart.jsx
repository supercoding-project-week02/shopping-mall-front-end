import styled from '@emotion/styled';
import React from 'react';
// import { ReactComponent as DeleteButton } from "/../assets/cart/delete.svg";

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

    return (
        <OuterDiv>
            <TitleDiv>
                장바구니
            </TitleDiv>
            <Table>
                <Thead>
                    <Td1>상품 정보</Td1>
                    <Td2>수량</Td2>
                    <Td3>주문금액</Td3>
                    <Td4>배송 정보</Td4>
                </Thead>
                <Tr>
                    <ProductDiv>
                            <Img alt="sample_img" src="https://cdn.imweb.me/thumbnail/20230531/74fe4a1bc360f.jpg" />
                        <ProductNameDiv>스쿠반 다용도 폴딩 바스켓</ProductNameDiv>
                        <DeleteButton>{icon()}</DeleteButton>
                    </ProductDiv>
                    <Td2>
                        <CountDiv class="option_btn_tools" style="float: none;">
                
                            <MinusA href="javascript:;" /* onclick="SITE_SHOP_CART.changeCartDecrease('mobile')" */>
                            <InnerI class="btl bt-minus" aria-hidden="true"></InnerI>
                            <Span class="sr-only">minus</Span>
                            </MinusA>				
                            
                            <CountInput type="text" title="number" value="1" class="form-control _order_count_mobile" /* onchange="SITE_SHOP_CART.changeCartOrderCount('mobile', $(this).val())" */ />
                            
                            <PlusA href="javascript:;" onclick="SITE_SHOP_CART.changeCartIncrease('mobile')" >
                            <InnerI class="btl bt-plus"></InnerI>
                            <Span class="sr-only">plus</Span>
                            </PlusA>	
                                /* 0815 작업 중 막힌 포인트 : svg 넣기, 수량 조절 넣기(ing) */
                        </CountDiv>
                    </Td2>
                    <Td3>21,900원</Td3>
                    <Td4>3,000원</Td4>
                </Tr>
            </Table>
        </OuterDiv>
    );
};

export default Cart;

const CountDiv = styled.div``;
const MinusA = styled.a``;
const PlusA = styled.a``;
const CountInput = styled.input``;
const InnerI = styled.i``;
const Span = styled.span``;

const OuterDiv = styled.div`
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const TitleDiv = styled.div`
    box-sizing: border-box;
    font-size: 25px;
    width: 100%;
    text-align: left;
    padding: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-top: 1px solid rgba(68,68,68,0.15);
    border-collapse: collapse;
`;

const Thead = styled.tr`
    color: gray;
    font-weight:  normal;
    font-size: 15px;
    border-bottom: 1px solid rgba(68,68,68,0.15);
    /* border-bottom: 1px solid #444444;
    border-left: 1px solid #444444;
    padding: 10px; */
    height: 50px;
`;

const Tr = styled.tr`
    border-bottom: 1px solid rgba(68,68,68,0.15);
    border-left: none;
    padding: 10px;
    height: 110px;
`;

const ProductDiv = styled.div`
    display: flex;
`;

const Img = styled.img`
    width: 100px;
    padding: 15px;
`;

const ProductNameDiv = styled.div`
    padding: 15px;
`;

const DeleteButton = styled.button``;

const Td1 = styled.td`
    width: 1000px;
`;

const Td2 = styled.td`
    width: 300px;
`;

const Td3 = styled.td`
    width: 300px;
`;

const Td4 = styled.td`
    width: 300px;
`;



