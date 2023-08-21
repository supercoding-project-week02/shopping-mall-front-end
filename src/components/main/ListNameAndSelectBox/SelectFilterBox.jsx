import { useRecoilState } from 'recoil';

import { itemListState } from '@/recoil/atoms/itemListState';
import * as S from './ListNameAndSelectBox.Styles';

const SelectFilterBox = () => {
  const [sortFilter, setSortFilter] = useRecoilState(itemListState);

  const sortHandler = (event) => {
    const clickedSort = event.target.value;
    setSortFilter((prevItemList) => ({
      ...prevItemList,
      sort: clickedSort,
    }));
  };

  return (
    <S.SelectFilterBox>
      <S.SelectFilter onChange={sortHandler}>
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
