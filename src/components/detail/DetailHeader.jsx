import { useState } from 'react';

import CounterBox from '@/components/common/CounterBox/CounterBox.jsx';
import { Icon } from '@/components/common/Icon/Icon.jsx';
import * as S from './DetailHeader.styles';
import CartModal from '../common/CartModal/CartModal';

const contentData = [
  {
    title: '상품명',
    value: '할리갈리',
  },
  {
    title: '제조사',
    value: 'AMIGO',
  },
  {
    title: '판매가',
    value: 19000,
  },
  {
    title: '게임 인원',
    value: '2~6명',
  },
  {
    title: '난이도',
    value: '초급',
  },
  {
    title: '게임 시간',
    value: '10~20분',
  },
  {
    title: '재고 수량',
    value: 7,
  },
];

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const dataTitle = contentData.slice(3).map((t) => <div key={t.id}>{t.title}</div>);
const dataValue = contentData.slice(3).map((v) => <div key={v.id}>{v.value}</div>);

const DetailHeaders = () => {
  const [image, setImage] = useState('EmptyHeart');

  const [isOpen, setIsOpen] = useState(false);

  const modalIsOpen = () => {
    setIsOpen(true);
  };

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
          <S.GameName>{contentData[0].value}</S.GameName>
          <S.Company>
            <S.CompanyTitle>{contentData[1].title}</S.CompanyTitle>
            <S.CompanyName>{contentData[1].value}</S.CompanyName>
          </S.Company>
        </S.Title>
        <S.ContentWrapper>
          <S.ContentTitle>
            <S.SaleTitle>{contentData[2].title}</S.SaleTitle>
            <div>{dataTitle}</div>
          </S.ContentTitle>
          <S.ContentValue>
            <div>{formatPrice(contentData[2].value)}원</div>
            <div>{dataValue}</div>
          </S.ContentValue>
        </S.ContentWrapper>
        <CounterBox productPrice={contentData[2].value} productStock={contentData[6].value} />
        <S.ButtonWrapper>
          <S.PlusCartButton onClick={modalIsOpen}>장바구니</S.PlusCartButton>
          <CartModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
