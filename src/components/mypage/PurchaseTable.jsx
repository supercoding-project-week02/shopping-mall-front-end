import { useQuery } from '@tanstack/react-query';

import { getPurchaseHistory } from '@/apis/index.js';
import * as S from '@/pages/MyPage/MyPage.styles.jsx';

const PurchaseTable = () => {
  const { data, isError } = useQuery(['purcahse'], getPurchaseHistory);

  if (!data) return null;
  if (isError) return <div>에러가 발생했습니다.</div>;

  const products = data.data?.map((product, index) => ({
    key: index,
    id: product.paymentId,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={product.product.mainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{product.product.title}</div>
          <span>{product.purchasePrice?.toLocaleString('ko-KR')}원</span>
        </div>
        {/*<Icon name="IconPencil" onClick={() => alert('수정 모드로 변환')} size={10} />*/}
      </S.ProductInfoWrapper>
    ),
    수량: product.purchaseQuantity,
    구매날짜: product.purchasedAt.split('T')[0],
  }));

  return (
    <S.Table //
      columns={purchaseColumns}
      dataSource={products}
      pagination={true}
    />
  );
};

const purchaseColumns = [
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
];

export default PurchaseTable;
