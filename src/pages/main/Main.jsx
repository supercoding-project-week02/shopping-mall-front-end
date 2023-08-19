import { useState } from 'react';
import { connect } from 'react-redux';

import CarouselBox from '@/components/main/GenreCarousel/CarouselBox';
import ItemListGrid from '@/components/main/ItemListGrid/ItemListGrid';
import * as S from '@/pages/Main/Main.Styles.jsx';
import { fetchItems } from '@/redux/action/mainActions';

const Main = ({ fetchItems }) => {
  const [selectData, setSelectData] = useState({
    page: null,
    size: null,
    sort: '',
    searchKeyword: '',
    genre: null,
    category: [],
  });

  const [categoryArray, setCategoryArray] = useState([]);

  const categoryArrayHandler = () => {};

  const genreHandler = (event) => {
    setSelectData((prevData) => ({
      ...prevData,
      genre: event.target.id,
    }));
  };

  const categoryHandler = () => {};

  const sortHandler = () => {};

  const searchHandler = () => {
    const reqData = selectData;

    fetchItems(reqData);
  };
  console.log(selectData);

  return (
    <S.MainPageWrapper>
      <S.MainContainer>
        <CarouselBox genreHandler={genreHandler} />
        <ItemListGrid />
      </S.MainContainer>
    </S.MainPageWrapper>
  );
};

const mapDispatchToProps = {
  fetchItems,
};

export default connect(null, mapDispatchToProps)(Main);
