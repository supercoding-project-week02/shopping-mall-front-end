import { useQuery } from '@tanstack/react-query';

import { getSalesHistory } from '@/apis/index.js';
import { Icon } from '@/components/common/Icon/Icon.jsx';
import { mockColumns } from '@/mocks/mockData.js';
import * as S from './Mypage.styles.jsx';

const salesColumns = mockColumns['판매목록'];
// GYU-TODO: 삭제 예정
// const data = mockDatas['판매목록'] || [];

const SalesTable = () => {
  const { data, isError } = useQuery(['sales'], getSalesHistory);

  if (!data) return null;
  if (isError) return <div>에러가 발생했습니다.</div>;

  const history = data.data.map((product, index) => ({
    key: index,
    id: product.paymentId,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={product.product.mainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{product.product.title}</div>
          <span>{product.soldPrice?.toLocaleString('ko-KR')}원</span>
        </div>
      </S.ProductInfoWrapper>
    ),

    재고수: (
      <S.InputText //
        inputType="number"
        name="number"
        value={product.soldQuantity}
        editable
        onSubmit={() => {}}
      />
    ),
    판매마감날짜: product.soldAt.split('T')[0],
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
