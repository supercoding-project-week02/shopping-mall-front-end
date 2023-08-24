import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { itemListState } from '@/recoil/atoms/itemListState.js';
import * as S from './Header.Styles.jsx';

const SearchBar = () => {
  const [isSearchBar, setIsSearchBar] = useState(false);

  const [searchFilter, setSearchFilter] = useRecoilState(itemListState);

  const searchBarRef = useRef();

  const searchBarHandler = () => {
    setIsSearchBar(!isSearchBar);
  };

  const searchHandler = (event) => {
    if (event.key === 'Enter') {
      setSearchFilter((prevItemList) => ({
        ...prevItemList,
        page: 0,
        genre: '전체',
        searchKeyword: event.target.value,
      }));
      setIsSearchBar(false);
    }
  };

  useEffect(() => {
    if (isSearchBar) {
      searchBarRef.current.focus();
    }
  }, [isSearchBar]);

  return (
    <>
      {isSearchBar && (
        <S.SearchBarBox>
          <S.SearchBar
            type="text"
            onKeyUp={searchHandler}
            ref={searchBarRef}
            placeholder="검색어를 입력하세요"
          />
        </S.SearchBarBox>
      )}
      <S.SearchBtnBox onClick={searchBarHandler}>
        <S.ResponsiveIcon name="IconSearch" width="20px" />
      </S.SearchBtnBox>
    </>
  );
};

export default SearchBar;
