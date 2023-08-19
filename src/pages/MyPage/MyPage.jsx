import { useState } from 'react';

import PurchaseTable from '@/components/mypage/PurchaseTable.jsx';
import SalesTable from '@/components/mypage/SalesTable.jsx';
import ShoppingBasketTable from '@/components/mypage/ShoppingBasketTable.jsx';
import UserProfile from '@/components/UserProfile/UserProfile.jsx';
import * as S from './MyPage.styles.jsx';

const menus = ['판매목록', '구매목록', '장바구니', '문의'];
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
          {activeMenu === '판매목록' && <SalesTable />}
          {activeMenu === '구매목록' && <PurchaseTable />}
          {activeMenu === '장바구니' && <ShoppingBasketTable />}
        </S.ContentContainer>
      </S.ContentWrapper>
    </S.MyPageWrapper>
  );
};

export default MyPage;
