import { useState } from 'react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import UserProfile from '@/components/UserProfile/UserProfile.jsx';
import * as S from './MyPage.styles.jsx';

const menus = ['판매목록', '구매목록', '장바구니', '찜목록', '리뷰', '문의'];

const columns = [
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
];

const datas = Array.from({ length: 5 }).map((value, index) => ({
  key: index,
  id: `id ${index}`,
  상품정보: (
    <>
      <span>{`상품정보 z ${index}`} </span>
      <Icon name="IconPencil" onClick={() => alert('수정 모드로 변환')} size={10} />
    </>
  ),
  재고수: `재고수 ${index}`,
  판매마감날짜: `판매마감날짜 ${index}`,
}));

const MyPage = () => {
  // 판매목록, 구매목록, 장바구니, 찜목록, 리뷰, 문의
  const [activeMenu, setActiveMenu] = useState('판매목록');

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
          <S.Table columns={columns} dataSource={datas} pagination={false} />
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.MyPageWrapper>
  );
};

export default MyPage;
