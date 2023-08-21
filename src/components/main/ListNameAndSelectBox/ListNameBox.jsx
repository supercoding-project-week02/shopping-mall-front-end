import { useState } from 'react';

import * as S from './ListNameAndSelectBox.Styles';

const ListNameBox = () => {
  const length = 6;
  const [gridListGenre, setGridListGenre] = useState('전체');
  return (
    <S.GridListLengthBox>
      {gridListGenre}
      <S.GridListLength> {length}개</S.GridListLength>
    </S.GridListLengthBox>
  );
};

export default ListNameBox;
