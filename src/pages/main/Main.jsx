import CarouselBox from '@/components/main/GenreCarousel/CarouselBox';
import ItemListGrid from '@/components/main/ItemListGrid/ItemListGrid';
import * as S from '@/pages/main/Main.Styles.jsx';

const Main = () => {
  return (
    <S.MainPageWrapper>
      <S.MainContainer>
        <CarouselBox />
        <ItemListGrid />
      </S.MainContainer>
    </S.MainPageWrapper>
  );
};

export default Main;
