import * as S from './ItemListGrid.Styles.jsx';

const GridListLengthBox = (props) => {
  return (
    <S.GridListLengthBox>
      전체 <S.GridListLength>{props.length}개</S.GridListLength>
    </S.GridListLengthBox>
  );
};

export default GridListLengthBox;
