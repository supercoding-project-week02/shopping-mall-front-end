import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import WriteInput from '@/components/write/WriteInput/WriteInput';
import * as S from './Write.styles';
import { writeData } from './writeData';

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
      </S.WriteForm>
    </S.WriteContainer>
  );
};

export default Write;
