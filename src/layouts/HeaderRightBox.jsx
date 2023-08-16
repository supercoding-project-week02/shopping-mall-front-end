import { useState } from 'react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import * as S from './Styles.js';

const HeaderRightBox = () => {
  let isCustomer = false;

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
        <S.MyInfoBtnBox>
          <Icon name="IconUser" width="25px" onClick={() => (window.location.href = '/mypage')} />
        </S.MyInfoBtnBox>
        <S.CartBtnBox>
          <Icon name="IconBasket" width="25px" onClick={() => (window.location.href = '/cart')} />
        </S.CartBtnBox>
        {!isCustomer && (
          <S.ProductAddBtnBox>
            <Icon name="IconWrite" width="25px" onClick={() => (window.location.href = '/write')} />
          </S.ProductAddBtnBox>
        )}
      </S.HeaderBtnsBox>
    </S.HeaderRightBox>
  );
};

export default HeaderRightBox;
