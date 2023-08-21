import * as S from './DetailReviewPage.styles';

const reviewData = [
  {
    star: 5,
    content: '친구집에서 했다가 재미있어서 저도 구매했어요!!',
    name: '김희진',
    date: '2023.07.13',
  },
  {
    star: 5,
    content: '배송 빨라서 너무 좋아요',
    name: '김지우',
    date: '2023.07.29',
  },
  {
    star: 4,
    content: '쉽고 재미있어요',
    name: '한지인',
    date: '2023.07.29',
  },
];

export default function DetailReviewPage() {
  const lastNameBlind = (name) => {
    return name.slice(0, -1) + '*';
  };

  return (
    <>
      {reviewData.map((review, idx) => (
        <S.ReviewContainer key={idx}>
          <S.ReviewStar>{'⭐'.repeat(review.star)}</S.ReviewStar>
          <S.ReviewContent>{review.content}</S.ReviewContent>
          <S.Reviewer>{lastNameBlind(review.name)}</S.Reviewer>
          <S.ReviewDate>{review.date}</S.ReviewDate>
        </S.ReviewContainer>
      ))}
    </>
  );
}
