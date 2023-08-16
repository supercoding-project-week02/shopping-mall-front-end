import Slider from 'react-slick';
import styled from '@emotion/styled';

export const GenreCarouselWrapper = styled.div`
  width: 100%;
`;

export const GenreCarouselBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  width: 100%;

  .slick-track {
    width: auto !important;
    display: flex;
    justify-content: flex-start;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    width: auto !important;
  }
  .slick-prev,
  .slick-next {
    background-color: #efebeb;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    z-index: 1;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }

  .slick-prev:hover,
  .slick-next:hover {
    background-color: #cbc8c8;
  }

  .slick-prev:before,
  .slick-next:before {
    color: grey;
  }
`;

export const CardDiv = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const CardImgDiv = styled.div`
  background-color: #efebeb;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const CardImg = styled.img`
  z-index: 2;
  width: 4rem;
`;

export const CardText = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.25rem;
`;
