import { useState } from 'react';

import * as S from './ItemListGrid.Styles.jsx';

const GridListLengthBox = (props) => {
  const length = props.length;
  const [gridListGenre, setGridListGenre] = useState('전체');

  return (
    <S.GridListLengthBox>
      {gridListGenre} <S.GridListLength>{length}개</S.GridListLength>
    </S.GridListLengthBox>
  );
};

export default GridListLengthBox;
