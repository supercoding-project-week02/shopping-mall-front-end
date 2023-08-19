import { Icon } from '@/components/common/Icon/Icon.jsx';
import { mockColumns, mockDatas } from '@/mocks/mockData.js';
import * as S from './Mypage.styles.jsx';

const salesColumns = mockColumns['판매목록'];
const data = mockDatas['판매목록'] || [];

const SalesTable = () => {
  const history = data.map((product, index) => ({
    key: index,
    id: product.tradeId,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={product.productMainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{product.productTitle}</div>
          <span>{product.soldPricePerOne?.toLocaleString('ko-KR')}원</span>
        </div>
      </S.ProductInfoWrapper>
    ),

    재고수: (
      <S.InputText //
        inputType="number"
        name="number"
        value={product.soldAmount}
        editable
        onSubmit={() => {}}
      />
    ),
    판매마감날짜: product.soldDateTime,
    삭제: <Icon name="IconX" size={10} onClick={() => alert('삭제')} />,
  }));

  return (
    <S.Table //
      columns={salesColumns}
      dataSource={history}
      pagination={false}
    />
  );
};

export default SalesTable;
