import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './Carousel.Styles.jsx';
import CarouselCard from './CarouselCard';
import Images from './CarouselData';

const CarouselBox = (props) => {
  const settings = {
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <S.GenreCarouselWrapper>
      <S.StyledSlider {...settings}>
        {Images.map((obj, index) => (
          <CarouselCard
            key={index}
            idx={index}
            text={obj.text}
            image={obj.image}
            genreHandler={props.genreHandler}
          />
        ))}
      </S.StyledSlider>
    </S.GenreCarouselWrapper>
  );
};

export default CarouselBox;
