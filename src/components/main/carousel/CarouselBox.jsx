import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from '@emotion/styled';

import adventure from '@/assets/genre/adventure.svg';
import all from '@/assets/genre/all.svg';
import battle from '@/assets/genre/battle.svg';
import cartoon from '@/assets/genre/cartoon.svg';
import economic from '@/assets/genre/economic.svg';
import fantasy from '@/assets/genre/fantasy.svg';
import medieval from '@/assets/genre/medieval.svg';
import politics from '@/assets/genre/politics.svg';
import puzzle from '@/assets/genre/puzzle.svg';
import racing from '@/assets/genre/racing.svg';
import reasoning from '@/assets/genre/reasoning.svg';
import sf from '@/assets/genre/sf.svg';
import western from '@/assets/genre/western.svg';
import * as S from '@/components/main/Styles.js';

const CarouselBox = () => {
  const images = [
    {
      image: all,
      text: '전체',
    },

    {
      image: battle,
      text: '전쟁/전투',
    },
    {
      image: fantasy,
      text: '판타지',
    },
    {
      image: sf,
      text: 'SF',
    },
    {
      image: cartoon,
      text: '만화',
    },
    {
      image: adventure,
      text: '모험',
    },
    {
      image: politics,
      text: '정치',
    },
    {
      image: economic,
      text: '경제/경영',
    },
    {
      image: puzzle,
      text: '퍼즐',
    },
    {
      image: reasoning,
      text: '추리',
    },
    {
      image: medieval,
      text: '문명/중세',
    },
    {
      image: western,
      text: '서부시대',
    },
    {
      image: racing,
      text: '레이싱',
    },
  ];

  const settings = {
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };

  return (
    <S.MainPageWrapper>
      <S.MainContainer>
        <S.GenreCarouselWrapper>
          <StyledSlider {...settings}>
            {images.map((obj, index) => (
              <S.CarouselCard key={index}>
                <CardDiv id={obj.text}>
                  <CardImgDiv>
                    <CardImg src={obj.image} alt="대체 이미지" />
                  </CardImgDiv>
                  <CardText>{obj.text}</CardText>
                </CardDiv>
              </S.CarouselCard>
            ))}
          </StyledSlider>
        </S.GenreCarouselWrapper>
      </S.MainContainer>
    </S.MainPageWrapper>
  );
};

export default CarouselBox;

const StyledSlider = styled(Slider)`
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
    // 이전과 다음 버튼에 대한 스타일을 지정합니다
    background-color: #efebeb; // 배경색 설정
    width: 30px; // 버튼의 너비 설정
    height: 30px; // 버튼의 높이 설정
    border-radius: 50%; // 버튼을 원형으로 만듭니다
    z-index: 1;
  }

  .slick-prev {
    left: -40px; // 왼쪽 버튼 위치 조정
  }

  .slick-next {
    right: -40px; // 오른쪽 버튼 위치 조정
  }

  // 이전과 다음 버튼이 호버됐을 때 스타일을 지정할 수 있습니다
  .slick-prev:hover,
  .slick-next:hover {
    background-color: #cbc8c8; // 배경색 변경
  }

  .slick-prev:before,
  .slick-next:before {
    color: grey; // 텍스트를 빈 문자열로 설정하여 숨깁니다
  }
`;

const CardDiv = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const CardImgDiv = styled.div`
  background-color: #efebeb;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const CardImg = styled.img`
  z-index: 2;
  width: 4rem;
`;

const CardText = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.25rem;
`;
