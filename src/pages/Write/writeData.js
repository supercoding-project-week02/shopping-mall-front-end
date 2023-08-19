import cookierun from '@/assets/mainDummy/cookierun.png';
import disco from '@/assets/mainDummy/disco.png';
import hali from '@/assets/mainDummy/haligali.png';
import mono from '@/assets/mainDummy/monopoly.png';
import rolling from '@/assets/mainDummy/rolling.png';
import rummi from '@/assets/mainDummy/rummikub.png';

export const writeData = {
  productIdx: 1,
  mainImageUrl: hali,
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
    { imgIdx: 1, imgUrl: cookierun },
    { imgIdx: 2, imgUrl: disco },
    { imgIdx: 3, imgUrl: mono },
    { imgIdx: 4, imgUrl: rolling },
    { imgIdx: 5, imgUrl: rummi },
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
