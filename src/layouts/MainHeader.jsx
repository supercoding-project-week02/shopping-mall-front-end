import { useState } from 'react';

import * as S from './Styles.js';

const MainHeader = () => {
  let isLogin = true;
  let isCustomer = false;

  const [isSearchBar, setIsSearchBar] = useState(false);

  const searchBarHandler = () => {
    if (!isSearchBar) setIsSearchBar(true);
    else setIsSearchBar(false);
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <S.HeaderLogoBox>로고</S.HeaderLogoBox>
        {isLogin && (
          <S.HeaderRightBox>
            {isSearchBar && (
              <S.SearchBarBox>
                <input type="text"></input>
              </S.SearchBarBox>
            )}
            <S.HeaderBtnsBox>
              <S.SearchBtnBox onClick={searchBarHandler}>검색</S.SearchBtnBox>
              <S.MyInfoBtnBox>마페</S.MyInfoBtnBox>
              <S.CartBtnBox>장바</S.CartBtnBox>
              {!isCustomer && <S.ProductAddBtnBox>추가</S.ProductAddBtnBox>}
            </S.HeaderBtnsBox>
          </S.HeaderRightBox>
        )}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default MainHeader;
