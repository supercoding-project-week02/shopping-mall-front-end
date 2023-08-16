import CarouselBox from '@/components/main/GenreCarousel/CarouselBox';
import * as S from '@/pages/main/MainStyles.jsx';

const Main = () => {
  return (
    <S.MainPageWrapper>
      <S.MainContainer>
        <CarouselBox />
      </S.MainContainer>
    </S.MainPageWrapper>
  );
};

export default Main;
