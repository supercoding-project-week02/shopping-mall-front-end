import axios from 'axios';
import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { itemListState } from '@/recoil/atoms/itemListState.js';
import GridCard from './GridCard.jsx';
import * as S from './ItemListGrid.Styles.jsx';

const ItemListGrid = () => {
  const [request, setRequest] = useRecoilState(itemListState);
  const [itemList, setItemList] = useState(null);
  const [isItem, setIsItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const debouncedFetchData = debounce(async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://52.79.168.48:8080/api/v1/product/', {
          params: request,
        });
        if (res.data.status === 200) {
          setItemList(res.data.data);
        } else window.alert(res.data.message);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 500);
    debouncedFetchData();
    console.log(request);
  }, [request]);

  return (
    <S.ItemListWrapper>
      <S.ItemListBox>
        {isItem ? (
          <S.GridContainer>
            {/* {itemList.map((itemList) => (
              <GridCard key={itemList.productIdx} item={itemList} />
            ))} */}
          </S.GridContainer>
        ) : (
          <S.NoItemGrid>아이템이 없습니다.</S.NoItemGrid>
        )}
      </S.ItemListBox>
    </S.ItemListWrapper>
  );
};

export default ItemListGrid;
