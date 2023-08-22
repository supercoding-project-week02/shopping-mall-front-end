import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import { itemListState } from '@/recoil/atoms/itemListState.js';
import { userState } from '@/recoil/atoms/userState.js';
import * as S from './Header.Styles.jsx';

const HeaderRightBox = () => {
  // 상태관리 추가를 위해 주석처리했습니다. 확인 후 삭제예정
  // let isCustomer = false;
  // let isLogin = true;

  // recoil의 상태 정보 불러오기
  const getUser = useRecoilValue(userState);

  const [isSearchBar, setIsSearchBar] = useState(false);
  const [searchFilter, setSearchFilter] = useRecoilState(itemListState);
  // 로그인 유무 확인 상태관리 추가
  const [isLogin, setIsLogin] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    getUser.email !== '' ? setIsLogin(true) : setIsLogin(false);
    getUser.role === 'CONSUMER' ? setIsCustomer(true) : setIsCustomer(false);
  }, [getUser.email, getUser.role]);

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
      setIsSearchBar(false);
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
