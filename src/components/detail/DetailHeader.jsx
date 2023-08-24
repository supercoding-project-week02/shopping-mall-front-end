import CounterBox from '@/components/common/CounterBox/CounterBox.jsx';
import { Icon } from '@/components/common/Icon/Icon.jsx';
import { useState } from 'react';
import CartModal from '@/components/detailModal/CartModal/CartModal';
import { client } from '@/apis';
import * as S from './DetailHeader.styles';

const formatPrice = (price) => {
  return price.toLocaleString('ko-KR');
};

const DetailHeaders = ({ product }) => {
  const [image, setImage] = useState('EmptyHeart');
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuanity] = useState(1);

  // TODO: api 요청 후 성공 처리
  // FIXME:
  const handleAddCart = () => {
    // TODO:
    // 1. 장바구니를 등록한다!
    // notion
    client
      .post('/shoppingcart', {
        productId: product.productIdx,
        amount: quantity,
      })
      .then((res) => {
        const response = res.data;
        console.log('response', response);
        setIsOpen(true);
        // 200 은 성공
        // if (response.status == 200) {
        //   // 성공 케이스 처리
        //   console.log('장바구니 추가 성공', data);
        //   // 2. 장바구니 모달을 띄운다!
        //   setIsOpen(true);
        //   return;
        // }

        // // 에러 핸들링 하고
        // // if (response.status === 401) {
        // //   navigate('/login');
        // // }
        // alert(`에러가 발생했어요! ${response.message}`);
        // alert('에러가 발생해썽요!',response.message);
      })
      .catch((error) => {
        // console.error(error);
      });
    // .finally(() => {
    //   // 무조건적인 로직!
    // });
  };

  const changeHeartHandler = () => {
    setImage(image === 'EmptyHeart' ? 'FullHeart' : 'EmptyHeart');
  };

  return (
    <S.HeaderContainer>
      <S.ImageContainer>
        <S.Image src={product.mainImageUrl} alt="main-image" />
      </S.ImageContainer>
      <S.Content>
        <S.Title>
          <S.GameName>{product.title}</S.GameName>
          <S.Company>
            <S.CompanyTitle>제조사</S.CompanyTitle>
            <S.CompanyName>{product.companyName}</S.CompanyName>
          </S.Company>
        </S.Title>
        <S.ContentWrapper>
          <S.ContentTitle>
            <div>판매가</div>
            <div>게임 인원</div>
            <div>난이도</div>
            <div>게임 시간</div>
            <div>재고 수량</div>
          </S.ContentTitle>
          <S.ContentValue>
            <div>{formatPrice(product.price)}원</div>
            <div>{product.playerCount}</div>
            <div>{product.difficultyLevel}</div>
            <div>{product.playTime}</div>
            <div>{product.amount}</div>
          </S.ContentValue>
        </S.ContentWrapper>
        <CounterBox
          productPrice={product.price}
          productStock={product.amount}
          quantity={quantity}
          setQuanity={setQuanity}
        />
        <S.ButtonWrapper>
          <S.PlusCartButton onClick={handleAddCart}>장바구니</S.PlusCartButton>
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
