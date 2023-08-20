import * as S from './ListNameAndSelectBox.Styles';

const SelectFilterBox = () => {
  return (
    <S.SelectFilterBox>
      <S.SelectFilter>
        <option key="createdAt" value="createdAt,desc">
          최신순
        </option>
        <option key="price" value="price,desc">
          가격 높은순
        </option>
        <option key="closingAt" value="closingAt,asc">
          마감 가까운 순
        </option>
      </S.SelectFilter>
    </S.SelectFilterBox>
  );
};

export default SelectFilterBox;
