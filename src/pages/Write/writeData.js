import imageLoading from '@/assets/genre/imageLoading.png';

export const writeData = {
  productIdx: 1,
  mainImageUrl: imageLoading,
  closingAt: '2023.08.15',
  title: '개꿀잼 할리갈리',
  companyName: '김희진팩토리',
  price: '12000원',
  avgRating: 4.8,
  playerCount: '5인 이상',
  difficultyLevel: '초급',
  playTime: '30분 미만',
  genre: 'SF',
  amount: 4,
  imgUrls: [
    { imgIdx: 1, imgUrl: imageLoading },
    { imgIdx: 2, imgUrl: imageLoading },
    { imgIdx: 3, imgUrl: imageLoading },
    { imgIdx: 4, imgUrl: imageLoading },
    { imgIdx: 5, imgUrl: imageLoading },
  ],
};

export const playerCountType = ['2인 전용', '2~4인 전용', '5인 이상', '협력/팀플레이', '1인 가능'];
export const difficultyLevelType = ['초급', '중급', '상급', '최상급'];
export const playTimeType = ['30분 미만', '30분~60분', '60분~90분', '90분 이상'];
export const genreType = [
  '전쟁/전투',
  '판타지/호러',
  'SF',
  '만화',
  '탐험/모험',
  '정치',
  '경제/경영',
  '퍼즐',
  '추리',
  '문명/중세',
  '서부시대',
  '레이싱',
  '음악/미술',
];
