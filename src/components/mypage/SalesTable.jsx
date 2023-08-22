import { useEffect, useState } from 'react';

import { getSalesHistory } from '@/apis/index.js';
import { Icon } from '@/components/common/Icon/Icon.jsx';
import { mockColumns } from '@/mocks/mockData.js';
import * as S from './Mypage.styles.jsx';

const salesColumns = mockColumns['판매목록'];
// GYU-TODO: 삭제 예정
// const data = mockDatas['판매목록'] || [];

const SalesTable = () => {
  const [salesHistory, setSalesHistory] = useState([]);

  // GYU-TODO: 삭제 예정, 패턴 변경 / 로그인 후 제대로 요청되는지 확인 용
  useEffect(() => {
    getSalesHistory().then((data) => setSalesHistory(data.data));
  }, []);

  const history = salesHistory.map((product, index) => ({
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
