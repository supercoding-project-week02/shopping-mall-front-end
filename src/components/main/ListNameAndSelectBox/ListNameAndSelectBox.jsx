import * as S from './ListNameAndSelectBox.Styles';
import ListNameBox from './ListNameBox';
import SelectFilterBox from './SelectFilterBox';

const ListNameAndSelectBox = (props) => {
  return (
    <S.ListNameAndSelectBox>
      <ListNameBox length={props.length} genre={props.genre} />
      <SelectFilterBox />
    </S.ListNameAndSelectBox>
  );
};

export default ListNameAndSelectBox;
