import { useState } from 'react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import * as S from './FilterOption.Styles.jsx';

const FilterToggleBtn = (props) => {
  const [isOn, setIsOn] = useState(false);

  const checkedHandler = () => {
    if (isOn) setIsOn(false);
    else setIsOn(true);
  };

  return (
    <S.BtnWrapper>
      {!isOn ? (
        <S.ToggleBtn onClick={checkedHandler}>{props.text}</S.ToggleBtn>
      ) : (
        <S.ToggleBtnChecked>
          {props.text}
          <Icon name="IconX" width="10px" onClick={checkedHandler}></Icon>
        </S.ToggleBtnChecked>
      )}
    </S.BtnWrapper>
  );
};

export default FilterToggleBtn;
