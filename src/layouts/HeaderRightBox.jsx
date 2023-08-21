import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import { itemListState } from '@/recoil/atoms/itemListState.js';
import * as S from './Header.Styles.jsx';

const HeaderRightBox = () => {
  let isCustomer = false;
  let isLogin = true;

  const [isSearchBar, setIsSearchBar] = useState(false);
  const [searchFilter, setSearchFilter] = useRecoilState(itemListState);

  const searchBarHandler = () => {
    if (!isSearchBar) setIsSearchBar(true);
    else setIsSearchBar(false);
  };

  const searchHandler = (event) => {
    if (event.key === 'Enter') {
      const searchKeyword = event.target.value;
      setSearchFilter((prevItemList) => ({
        ...prevItemList,
        searchKeyword: searchKeyword,
      }));
    }
  };

  return (
    <S.HeaderRightBox>
      {isSearchBar && (
        <S.SearchBarBox>
          <S.SearchBar type="text" onKeyUp={searchHandler}></S.SearchBar>
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
