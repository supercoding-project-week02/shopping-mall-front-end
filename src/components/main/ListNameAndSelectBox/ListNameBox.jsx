import * as S from './ListNameAndSelectBox.Styles';

const ListNameBox = (props) => {
  return (
    <S.GridListLengthBox>
      {props.genre}
      <S.GridListLength> {props.length}개</S.GridListLength>
    </S.GridListLengthBox>
  );
};

export default ListNameBox;
