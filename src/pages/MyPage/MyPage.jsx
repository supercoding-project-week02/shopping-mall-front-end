import { useState } from 'react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import UserProfile from '@/components/UserProfile/UserProfile.jsx';
import { mockColumns, mockDatas } from '@/mocks/mockData.js';
import * as S from './MyPage.styles.jsx';

const menus = ['판매목록', '구매목록', '장바구니', '찜목록', '리뷰', '문의'];
const MyPage = () => {
  // 판매목록, 구매목록, 장바구니, 찜목록, 리뷰, 문의
  const [activeMenu, setActiveMenu] = useState('판매목록');

  // TODO: 각 아이템별 형식 분기쳐서 처리할 예정
  const columns = mockColumns[activeMenu];
  const data = mockDatas[activeMenu] || [];

  // TODO: 각 아이템별 리스트 가져오는거 추출해서 처리할지 고민!
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
    // TODO:  판매내역, 구매내역 형태로 API 나오면 각각으로 처리하기!
    재고수: product.soldAmount,
    수량: product.soldAmount,
    판매마감날짜: product.soldDateTime,
    구매날짜: product.paymentDateTime,
  }));

  console.log(data);

  return (
    <S.MyPageWrapper>
      <S.MenusWrapper>
        {menus.map((menu) => (
          <S.MenuItem
            key={menu}
            className={menu === activeMenu ? 'active' : ''}
            onClick={() => setActiveMenu(menu)}
          >
            <span>{menu}</span>
          </S.MenuItem>
        ))}
      </S.MenusWrapper>

      <S.ContentWrapper>
        <UserProfile />
        <S.ContentContainer>
          <S.Title>{activeMenu}</S.Title>
          <S.Table
            columns={columns || mockColumns['판매목록']}
            dataSource={products}
            pagination={false}
          />
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.MyPageWrapper>
  );
};

export default MyPage;
