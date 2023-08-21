import { RecoilRoot } from 'recoil';

import FilterOption from '@/components/main/FilterOption/FilterOption';
import CarouselBox from '@/components/main/GenreCarousel/CarouselBox';
import ItemListGrid from '@/components/main/ItemListGrid/ItemListGrid';
import ListNameAndSelectBox from '@/components/main/ListNameAndSelectBox/ListNameAndSelectBox';
import * as S from '@/pages/main/Main.Styles.jsx';

const Main = () => {
  return (
    <RecoilRoot>
      <S.MainPageWrapper>
        <S.MainContainer>
          <CarouselBox />
          <FilterOption />
          <ListNameAndSelectBox />
          <ItemListGrid />
        </S.MainContainer>
      </S.MainPageWrapper>
    </RecoilRoot>
  );
};

export default Main;
