import * as S from './FilterOption.Styles.jsx';
import FilterToggleBtn from './FilterToggleBtn.jsx';

const FilterOption = () => {
  return (
    <S.FilterOptionWrapper>
      <S.FilterBtnBox>
        <S.BtnTrack>
          <FilterToggleBtn text="2인 전용" />
          <FilterToggleBtn text="2~4인 전용" />
          <FilterToggleBtn text="5인 이상" />
          <FilterToggleBtn text="협력/팀플레이" />
          <FilterToggleBtn text="1인 가능" />
        </S.BtnTrack>
        <S.BtnTrack>
          <FilterToggleBtn text="초급" />
          <FilterToggleBtn text="중급" />
          <FilterToggleBtn text="상급" />
          <FilterToggleBtn text="최상급" />
        </S.BtnTrack>
        <S.BtnTrack>
          <FilterToggleBtn text="30분 미만" />
          <FilterToggleBtn text="30분~60분" />
          <FilterToggleBtn text="60분~90분" />
          <FilterToggleBtn text="90분 이상" />
        </S.BtnTrack>
      </S.FilterBtnBox>
    </S.FilterOptionWrapper>
  );
};

export default FilterOption;
