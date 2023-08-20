import * as S from './DetailHeader.styles';
import CounterBox from '@/components/common/counterbox/CounterBox.jsx';
import { Icon } from '@/components/common/Icon/Icon.jsx';
import { useState } from 'react';

const contentdata = [
  {
    id: 1,
    title: '판매가',
    value: '19,000원',
  },
  {
    id: 2,
    title: '게임 인원',
    value: '2~6명',
  },
  {
    id: 3,
    title: '난이도',
    value: '하',
  },
  {
    id: 4,
    title: '게임 시간',
    value: '10~20분',
  },
  {
    id: 5,
    title: '재고 수량',
    value: '15',
  },
];

const dataTitle = contentdata.map((t, index) => <div key={index}>{t.title}</div>);
const dataValue = contentdata.map((v, index) => <div key={index}>{v.value}</div>);

const DetailHeaders = () => {
  const [image, setImage] = useState('EmptyHeart');
  const changeHeartHandler = () => {
    setImage(image === 'EmptyHeart' ? 'FullHeart' : 'EmptyHeart');
  };

  return (
    <S.HeaderContainer>
      <S.ImageContainer>
        <S.Image
          src="https://boardm.co.kr/upload/product/img4/img_largeupfilenm_1672910358_0.jpg?t=1682590618"
          alt="할리갈리"
        />
      </S.ImageContainer>
      <S.Content>
        <S.Title>
          <S.GameName>할리갈리</S.GameName>
          <S.Company>
            <S.CompanyTitle>제조사</S.CompanyTitle>
            <S.CompanyName>AMIGO</S.CompanyName>
          </S.Company>
        </S.Title>
        <S.ContentWrapper>
          <S.ContentTitle>
            <div>{dataTitle}</div>
          </S.ContentTitle>
          <S.ContentValue>
            <div>{dataValue}</div>
          </S.ContentValue>
        </S.ContentWrapper>
        <CounterBox />
        <S.ButtonWrapper>
          <S.PlusCartButton>장바구니</S.PlusCartButton>
          <S.ClickHeartButton onClick={changeHeartHandler}>
            찜하기
            <Icon name={image} size={20} />
          </S.ClickHeartButton>
        </S.ButtonWrapper>
      </S.Content>
    </S.HeaderContainer>
  );
};

export default DetailHeaders;
