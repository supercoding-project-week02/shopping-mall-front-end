import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import imageLoading from '@/assets/genre/imageLoading.png';
import { productId } from '@/recoil/atoms/productId.js';
import * as S from './ItemListGrid.Styles.jsx';
import StarRating from './StarRating.jsx';
const GridCard = (props) => {
  const item = props.item;
  const [productIdx, setProductIdx] = useRecoilState(productId);

<<<<<<< HEAD
  const onClickHandler = (event) => {
    setProductIdx(event.target.id);
=======
  const onClickHandler = () => {
    setProductIdx(item.id);
>>>>>>> fb9bce8c78cf7c4684f557be38b2a2ccfe1e19e2
  };
  return (
    <S.GridCard>
      <S.GridImgBox>
<<<<<<< HEAD
        <Link to={`/detail/${productIdx}`}>
=======
        <Link to={`/detail/${item.productId}`}>
>>>>>>> fb9bce8c78cf7c4684f557be38b2a2ccfe1e19e2
          <S.GridImg
            src={item.mainImageUrl && item.mainImageUrl !== '' ? item.mainImageUrl : imageLoading}
            id={item.productId}
            onClick={onClickHandler}
          />
        </Link>
      </S.GridImgBox>
      <S.GridTextBox>
        <S.GridNameBox>{item.companyName}</S.GridNameBox>
        <S.GridTitleBox>{item.title}</S.GridTitleBox>
        <S.GridPriceBox>{item.price.toLocaleString()}원</S.GridPriceBox>
        <StarRating rating={item.avgRating} />
      </S.GridTextBox>
    </S.GridCard>
  );
};

export default GridCard;
