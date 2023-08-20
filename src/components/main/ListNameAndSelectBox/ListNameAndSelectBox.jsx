import * as S from './ListNameAndSelectBox.Styles';
import ListNameBox from './ListNameBox';
import SelectFilterBox from './SelectFilterBox';

const ListNameAndSelectBox = () => {
  return (
    <S.ListNameAndSelectBox>
      <ListNameBox />
      <SelectFilterBox />
    </S.ListNameAndSelectBox>
  );
};

export default ListNameAndSelectBox;
