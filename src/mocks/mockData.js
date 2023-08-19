import { purchaseData } from './purchaseData.js';
import { salesData } from './salesData.js';

// 판매목록, 구매목록, 장바구니, 찜목록, 리뷰, 문의
export const mockColumns = {
  판매목록: [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '상품정보',
      dataIndex: '상품정보',
      key: '상품정보',
    },
    {
      title: '재고수',
      dataIndex: '재고수',
      key: '재고수',
    },
    {
      title: '판매 마감 날짜',
      dataIndex: '판매마감날짜',
      key: '판매마감날짜',
    },
    {
      title: '',
      dataIndex: '삭제',
      key: '삭제',
    },
  ],
  구매목록: [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '상품정보',
      dataIndex: '상품정보',
      key: '상품정보',
    },
    {
      title: '수량',
      dataIndex: '수량',
      key: '수량',
    },
    {
      title: '구매 날짜',
      dataIndex: '구매날짜',
      key: '구매날짜',
    },
  ],
  // TODO: 메뉴별 형식
  // 장바구니: [],
};

const _salesData = salesData.map((item) => {
  return item.products.map((product) => ({ ...item, ...product }));
});

const _purchasData = purchaseData.map((item) => {
  return item.products.map((product) => ({ ...item, ...product }));
});

export const mockDatas = {
  판매목록: _salesData.flat(),
  구매목록: _purchasData.flat(),
  // TODO: 메뉴별 형식
  // 장바구니: shoppingBasketData,
};
