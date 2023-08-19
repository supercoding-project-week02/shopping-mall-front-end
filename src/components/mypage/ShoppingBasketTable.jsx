import * as S from './Mypage.styles.jsx';

const ShoppingBasketTable = () => {
  const shoppingBaskets = data.map((product, index) => ({
    key: index,
    id: product.tradeId,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={product.product.mainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{product.product.title}</div>
          <span>{product.product.price?.toLocaleString('ko-KR')}원</span>
        </div>
      </S.ProductInfoWrapper>
    ),
    수량: product.quantity,
    주문금액: <>{(product.product.price * product.quantity).toLocaleString('ko-kr')}원</>,
  }));

  return (
    <S.Table columns={shoppingBasketColumns} dataSource={shoppingBaskets} pagination={false} />
  );
};

const shoppingBasketColumns = [
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
    title: '주문금액',
    dataIndex: '주문금액',
    key: '주문금액',
  },
];
const data = [
  {
    id: 1,
    consumer: {
      id: 1,
      profileId: 1,
    },
    product: {
      id: 1,
      title: '쉐입 퍼즐: 콜로세움 600 PCS',
      mainImageUrl: 'https://boardm.co.kr/upload/product/img2/img_largeupfilenm_1688696198_a.jpg',
      genre: '퍼즐',
      price: 17600,
      leftQuantity: 99,
      sellerId: 1,
      closingAt: '2023.09.17',
    },
    quantity: 2,
  },
  {
    id: 2,
    consumer: {
      id: 1,
      profileId: 1,
    },
    product: {
      id: 2,
      title: '빨강머리앤 500 두손을 마주잡고',
      mainImageUrl: 'https://boardm.co.kr/upload/product/img2/img_largeupfilenm_1684916549_0.jpg',
      genre: '퍼즐',
      price: 12000,
      leftQuantity: 99,
      sellerId: 2,
      closingAt: '2023.09.17',
    },
    quantity: 2,
  },
  {
    id: 3,
    consumer: {
      id: 1,
      profileId: 1,
    },
    product: {
      id: 3,
      title: '클루',
      mainImageUrl:
        'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/product/image/vendoritem/2018/08/23/3007143242/8be8c2f6-5880-4a23-9a0b-260e503a4a1b.jpg',
      genre: '추리',
      price: 23500,
      leftQuantity: 99,
      sellerId: 3,
      closingAt: '2023.09.17',
    },
    quantity: 3,
  },
];

export default ShoppingBasketTable;
