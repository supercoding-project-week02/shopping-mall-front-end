import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './Carousel.Styles.jsx';
import CarouselCard from './CarouselCard';
import Images from './CarouselData';

const CarouselBox = () => {
  const settings = {
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const responsiveSettings = [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 534,
      settings: {
        slidesToShow: 3,
      },
    },
  ];

  return (
    <S.GenreCarouselWrapper>
      <S.StyledSlider {...settings} responsive={responsiveSettings}>
        {Images.map((obj, index) => (
          <CarouselCard key={index} text={obj.text} image={obj.image} />
        ))}
      </S.StyledSlider>
    </S.GenreCarouselWrapper>
  );
};

export default CarouselBox;
