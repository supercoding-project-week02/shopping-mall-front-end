import { ScrollToTop } from '@/components/common/ScrollToTop.jsx';
import FilterOption from '@/components/main/FilterOption/FilterOption';
import CarouselBox from '@/components/main/GenreCarousel/CarouselBox';
import ItemListGrid from '@/components/main/ItemListGrid/ItemListGrid';
import * as S from '@/pages/main/Main.Styles.jsx';

const Main = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTop>
      <S.MainPageWrapper>
        <S.ToTopBtn onClick={scrollToTop}>TOP</S.ToTopBtn>
        <S.MainContainer>
          <CarouselBox />
          <FilterOption />
          <ItemListGrid />
        </S.MainContainer>
      </S.MainPageWrapper>
    </ScrollToTop>
  );
};

export default Main;
