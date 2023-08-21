import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import { itemListState } from '@/recoil/atoms/itemListState.js';
import * as S from './FilterOption.Styles.jsx';

const FilterToggleBtn = (props) => {
  const [isOn, setIsOn] = useState(false);

  const [categoryFilter, setCategoryFilter] = useRecoilState(itemListState);

  const categoryHandler = () => {
    if (isOn) {
      setCategoryFilter((prevCategory) => ({
        ...prevCategory,
        category: prevCategory.category.filter((item) => item !== props.text),
      }));
      setIsOn(false);
    } else {
      setCategoryFilter((prevCategory) => ({
        ...prevCategory,
        category: [...prevCategory.category, props.text],
      }));
      setIsOn(true);
    }
    console.log(categoryFilter);
  };

  return (
    <S.BtnWrapper>
      {!isOn ? (
        <S.ToggleBtn onClick={categoryHandler}>{props.text}</S.ToggleBtn>
      ) : (
        <S.ToggleBtnChecked>
          {props.text}
          <Icon name="IconX" width="10px" onClick={categoryHandler}></Icon>
        </S.ToggleBtnChecked>
      )}
    </S.BtnWrapper>
  );
};

export default FilterToggleBtn;
