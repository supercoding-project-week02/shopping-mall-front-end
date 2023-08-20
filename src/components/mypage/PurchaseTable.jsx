import { mockColumns, mockDatas } from '@/mocks/mockData.js';
import * as S from '@/pages/MyPage/MyPage.styles.jsx';

const purchaseColumns = mockColumns['구매목록'];
const data = mockDatas['구매목록'] || [];

const PurchaseTable = () => {
  const products = data.map((product, index) => ({
    key: index,
    id: product.tradeId,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={product.productMainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{product.productTitle}</div>
          <span>{product.soldPricePerOne?.toLocaleString('ko-KR')}원</span>
        </div>
        {/*<Icon name="IconPencil" onClick={() => alert('수정 모드로 변환')} size={10} />*/}
      </S.ProductInfoWrapper>
    ),
    수량: product.soldAmount,
    구매날짜: product.paymentDateTime,
  }));

  return (
    <S.Table //
      columns={purchaseColumns}
      dataSource={products}
      pagination={false}
    />
  );
};

export default PurchaseTable;
