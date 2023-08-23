import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import imageLoading from '@/assets/genre/imageLoading.png';
import { productId } from '@/recoil/atoms/productId.js';
import * as S from './ItemListGrid.Styles.jsx';
import StarRating from './StarRating.jsx';
const GridCard = (props) => {
  const item = props.item; // product
  const [productIdx, setProductIdx] = useRecoilState(productId);

  const onClickHandler = (event) => {
    setProductIdx(event.target.id);
  };

  return (
    <S.GridCard>
      <S.GridImgBox>
        <Link to={`/product/${props.item.productId}`}>
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
