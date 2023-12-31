import axios from 'axios';
import qs from 'qs';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { client } from '@/apis/index.js';
import { itemListState } from '@/recoil/atoms/itemListState.js';
import GridCard from './GridCard.jsx';
import * as S from './ItemListGrid.Styles.jsx';
import ListNameAndSelectBox from '../ListNameAndSelectBox/ListNameAndSelectBox.jsx';
import SkeletonComponent from '../SkeletonComponent/SkeletonComponent.jsx';

const ItemListGrid = () => {
  const [request, setRequest] = useRecoilState(itemListState);
  const setResetRequest = useResetRecoilState(itemListState);

  const [itemList, setItemList] = useState([]);
  const [totalLength, setTotalLength] = useState(null);
  const [isItem, setIsItem] = useState(true);
  const [loading, setLoading] = useState(true);
  const [stop, setStop] = useState(true);
  const observerRef = useRef(null);

  //HTTP 요청
  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const res = await client.get('/product/', {
          params: request,
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: 'comma' });
          },
        });
        const newData = res.data.data.contents;
        setTotalLength(res.data.data.totalElements);
        if (res.data.status === 200) {
          if (!res.data.data.hasNext) {
            setStop(true);
          } else setStop(false);
          if (newData.length === 0) setIsItem(false);
          else {
            setIsItem(true);
            if (request.page === 0) {
              setItemList(newData);
            } else {
              setItemList((prevItemList) => [...prevItemList, ...newData]);
            }
          }
        } else {
          window.alert(res.data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    FetchData();
  }, [request]);

  // INFINITE SCROLL
  const observerCallback = (entries) => {
    if (stop) return;
    if (entries[0].isIntersecting) {
      setRequest((prevItemList) => ({
        ...prevItemList,
        page: prevItemList.page + 1,
      }));
    }
  };

  useEffect(() => {
    if (!isItem) return;
    const options = {
      root: null,
      rootMargin: '2px',
      threshold: 0.7,
    };

    observerRef.current = new IntersectionObserver(observerCallback, options);

    if (observerRef.current) {
      observerRef.current.observe(observerTriggerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [stop]);

  useEffect(() => {
    return () => {
      setResetRequest();
    };
  }, []);

  const observerTriggerRef = useRef();

  return (
    <>
      <ListNameAndSelectBox length={totalLength} genre={request.genre} />
      <S.ItemListWrapper>
        <S.ItemListBox>
          {isItem ? (
            <S.GridContainer>
              {itemList.map((item, index) => (
                <GridCard key={index} item={item} />
              ))}
              <div ref={observerTriggerRef}></div>
              {loading &&
                Array.from({ length: 10 }).map((_, index) => <SkeletonComponent key={index} />)}
            </S.GridContainer>
          ) : (
            <S.NoItemGrid>아이템이 없습니다.</S.NoItemGrid>
          )}
        </S.ItemListBox>
      </S.ItemListWrapper>
    </>
  );
};

export default ItemListGrid;
