import cookierun from '@/assets/mainDummy/cookierun.png';
import disco from '@/assets/mainDummy/disco.png';
import hali from '@/assets/mainDummy/haligali.png';
import mono from '@/assets/mainDummy/monopoly.png';
import rolling from '@/assets/mainDummy/rolling.png';
import rummi from '@/assets/mainDummy/rummikub.png';

const dummy = [
  {
    mainImageUrl: hali,
    productIdx: 1,
    title: '할리갈리 (HaliGali)',
    companyName: 'AMIGO',
    price: 13000,
    genre: 'SF',
  },
  {
    mainImageUrl: rolling,
    productIdx: 2,
    title: '돌려보자 GO!',
    companyName: '상상의 집',
    price: 8900,
    genre: '퍼즐',
  },
  {
    mainImageUrl: '',
    productIdx: 3,
    title: '루미큐브 (Rummikub)',
    companyName: '김희진컴퍼니',
    price: 15400,
    genre: '퍼즐',
  },
  {
    mainImageUrl: mono,
    productIdx: 4,
    title: '모노폴리 (Monopoly)',
    companyName: 'k-부동산',
    price: 21000,
    genre: '경제/경영',
  },
  {
    mainImageUrl: disco,
    productIdx: 5,
    title: '디스코커버',
    companyName: 'disco',
    price: 5600,
    genre: '만화',
  },
  {
    mainImageUrl: cookierun,
    productIdx: 6,
    title: '쿠키런 킹덤',
    companyName: 'kakao',
    price: 25600,
    genre: '판타지',
  },
];

export default dummy;
