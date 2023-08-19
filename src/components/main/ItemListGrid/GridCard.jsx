import * as S from './ItemListGrid.Styles.jsx';

const GridCard = (props) => {
  const item = props.item;

  const onClickHandler = (event) => {
    console.log(event.target.id);
  };
  return (
    <S.GridCard>
      <S.GridImgBox>
        <S.GridImg src={item.mainImageUrl} id={item.productIdx} onClick={onClickHandler} />
      </S.GridImgBox>
      <S.GridTextBox>
        <S.GridNameBox>{item.companyName}</S.GridNameBox>
        <S.GridTitleBox>{item.title}</S.GridTitleBox>
        <S.GridPriceBox>{item.price.toLocaleString()}원</S.GridPriceBox>
      </S.GridTextBox>
    </S.GridCard>
  );
};

export default GridCard;
