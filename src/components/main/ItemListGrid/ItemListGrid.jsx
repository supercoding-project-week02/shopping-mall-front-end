import GridCard from './GridCard.jsx';
import GridListLengthBox from './GridListLengthBox.jsx';
import * as S from './ItemListGrid.Styles.jsx';
import dummy from './ItemListGridData.js';

const ItemListGrid = () => {
  return (
    <S.ItemListWrapper>
      <S.ItemListBox>
        <GridListLengthBox length={dummy.length} />
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
