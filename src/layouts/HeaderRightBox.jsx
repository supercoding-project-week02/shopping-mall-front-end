import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import * as S from './Header.Styles.jsx';

const HeaderRightBox = () => {
  let isCustomer = false;
  let isLogin = true;

  const [isSearchBar, setIsSearchBar] = useState(false);

  const searchBarHandler = () => {
    if (!isSearchBar) setIsSearchBar(true);
    else setIsSearchBar(false);
  };
  return (
    <S.HeaderRightBox>
      {isSearchBar && (
        <S.SearchBarBox>
          <input type="text"></input>
        </S.SearchBarBox>
      )}
      <S.HeaderBtnsBox>
        <S.SearchBtnBox onClick={searchBarHandler}>
          <Icon name="IconSearch" width="20px" />
        </S.SearchBtnBox>
        <Link to={isLogin ? '/mypage' : '/login'}>
          <S.MyInfoBtnBox>
            <Icon name="IconUser" width="25px" />
          </S.MyInfoBtnBox>
        </Link>
        {isLogin && (
          <Link to="/cart">
            <S.CartBtnBox>
              <Icon name="IconBasket" width="25px" />
            </S.CartBtnBox>
          </Link>
        )}
        {!isCustomer && isLogin && (
          <Link to="/write">
            <S.ProductAddBtnBox>
              <Icon name="IconWrite" width="25px" />
            </S.ProductAddBtnBox>
          </Link>
        )}
      </S.HeaderBtnsBox>
    </S.HeaderRightBox>
  );
};

export default HeaderRightBox;
