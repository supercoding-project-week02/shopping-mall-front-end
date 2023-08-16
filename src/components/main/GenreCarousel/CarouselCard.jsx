import * as S from './Carousel.Styles.jsx';

const CarouselCard = (props) => {
  return (
    <S.CardDiv id={props.text}>
      <S.CardImgDiv>
        <S.CardImg src={props.image} alt="대체 이미지" />
      </S.CardImgDiv>
      <S.CardText>{props.text}</S.CardText>
    </S.CardDiv>
  );
};

export default CarouselCard;