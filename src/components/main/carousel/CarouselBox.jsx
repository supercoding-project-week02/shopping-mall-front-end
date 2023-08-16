import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CarouselCard from './CarouselCard';
import Images from './Data';
import * as S from './/Styles.js';

const CarouselBox = () => {
  const settings = {
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
  };

  return (
    <S.GenreCarouselWrapper>
      <S.StyledSlider {...settings}>
        {Images.map((obj, index) => (
          <CarouselCard key={index} text={obj.text} image={obj.image} />
        ))}
      </S.StyledSlider>
    </S.GenreCarouselWrapper>
  );
};

export default CarouselBox;
