import * as S from './ItemListGrid.Styles.jsx';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <S.StarContainer>
      {Array.from({ length: maxStars }).map((_, index) => (
        <S.Star key={index} filled={index < fullStars || (index === fullStars && hasHalfStar)}>
          ★
        </S.Star>
      ))}
    </S.StarContainer>
  );
};

export default StarRating;
