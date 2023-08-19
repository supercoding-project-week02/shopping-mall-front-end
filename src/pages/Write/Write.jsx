import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Select from '@/components/write/Select/Select';
import WriteInput from '@/components/write/WriteInput/WriteInput';
import * as S from './Write.styles';
import {
  difficultyLevelType,
  genreType,
  playerCountType,
  playTimeType,
  writeData,
} from './writeData';

const Write = () => {
  const [isLoding, setIsLoding] = useState(true);
  const [data, setData] = useState(null);
  // 글쓰기페이지와 수정페이지가 폼이 동일하다고 판단하여
  // 같은 페이지에서 productId의 유무에 따라 로직 수행
  const { productId } = useParams();

  useEffect(() => {
    // productId가 있을 경우 로직
    if (productId) {
      // TODO: 상품 디테일 조회 api를 호출 이후 로직 수행

      // 현재는 mock 데이터 활용
      setData(writeData);
    }
    setIsLoding(false);
  }, []);
  return isLoding ? (
    <h1>로딩중입니다.</h1>
  ) : (
    <S.WriteContainer>
      <S.WriteForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <WriteInput label="제목" value={data ? data.title : ''} />
        <S.WriteInputsBox>
          <WriteInput label="가격" value={data ? data.price : ''} />
          <WriteInput label="재고 수량" value={data ? data.amount : ''} />
          <WriteInput
            label="판매 기간"
            value={data ? data.closingAt.split('.').join('-') : ''}
            type="date"
          />
        </S.WriteInputsBox>
        <Select
          array={genreType}
          genres="true"
          label="장르"
          name="genre"
          value={data ? genreType.indexOf(data.genre) + 1 : ''}
        />
        <Select
          array={playerCountType}
          label="인원"
          name="playerCount"
          value={data ? data.playerCount : ''}
        />
        <Select
          array={difficultyLevelType}
          label="난이도"
          name="difficultyLevel"
          value={data ? data.difficultyLevel : ''}
        />
        <Select
          array={playTimeType}
          label="플레이타임"
          name="playTime"
          value={data ? data.playTime : ''}
        />
      </S.WriteForm>
    </S.WriteContainer>
  );
};

export default Write;
