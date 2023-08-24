import { useRecoilState } from 'recoil';

import { itemListState } from '@/recoil/atoms/itemListState.js';
import * as S from './Carousel.Styles.jsx';

const CarouselCard = (props) => {
  const [genreFilter, setGenreFilter] = useRecoilState(itemListState);

  const genreHandler = (event) => {
    const clickedGenre = event.target.id;
    setGenreFilter((prevItemList) => ({
      ...prevItemList,
      page: 0,
      genre: clickedGenre,
      searchKeyword: '',
    }));
  };

  return (
    <S.CardDiv>
      <S.CardImgDiv>
        <S.CardImg src={props.image} alt="대체 이미지" id={props.text} onClick={genreHandler} />
      </S.CardImgDiv>
      <S.CardText>{props.text}</S.CardText>
    </S.CardDiv>
  );
};

export default CarouselCard;
