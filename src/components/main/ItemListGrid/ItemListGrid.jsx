import GridCard from './GridCard.jsx';
import * as S from './ItemListGrid.Styles.jsx';
import dummy from './ItemListGridData.js';

const ItemListGrid = () => {
  return (
    <S.ItemListWrapper>
      <S.ItemListBox>
        <S.GridContainer>
          {dummy.map((item) => (
            <GridCard key={item.productIdx} item={item} />
          ))}
        </S.GridContainer>
      </S.ItemListBox>
    </S.ItemListWrapper>
  );
};

export default ItemListGrid;
