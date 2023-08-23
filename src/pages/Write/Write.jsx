import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import ImgInput from '@/components/write/PreviewImgItem/ImgInput';
import Select from '@/components/write/Select/Select';
import WriteInput from '@/components/write/WriteInput/WriteInput';
import { useInputs } from '@/hooks/useInputs';
import { theme } from '@/styles/theme';
import * as S from './Write.styles';
import {
  difficultyLevelType,
  genreType,
  playerCountType,
  playTimeType,
  writeData,
} from './writeData';

const Write = () => {
  const location = useLocation();
  const [isLoding, setIsLoding] = useState(true);
  const [writeForm, setWriteForm] = useState({
    title: '',
    price: 0,
    closingAt: '',
    genre: '전쟁/전투',
    playTime: '30분 미만',
    playerCount: '2인 전용',
    difficultyLevel: '초급',
    amount: 1,
  });
  const [imgList, setImgList] = useState(['', '', '', '', '']);
  const [mainImg, setMainImg] = useState('');

  // 글쓰기페이지와 수정페이지가 폼이 동일하다고 판단하여
  // 같은 페이지에서 productId의 유무에 따라 로직 수행
  const { productId } = useParams();

  const handleChange = useCallback(
    (name, value) => {
      setWriteForm({
        ...writeForm,
        [name]: value,
      });
    },
    [writeForm],
  );

  useEffect(() => {
    // productId가 있을 경우 로직
    if (productId) {
      // TODO: 상품 디테일 조회 api를 호출 이후 로직 수행
      // 로직 처리할 때 날짜는 변환해서 넣어야함

      // 현재는 mock 데이터 활용
      setWriteForm(writeData);
      setImgList(writeData.imgUrls);
    }
    setIsLoding(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(writeForm);
  };

  console.log(writeForm);

  return isLoding ? (
    <h1>로딩중입니다.</h1>
  ) : (
    <S.WriteContainer>
      <S.WriteForm onSubmit={handleSubmit}>
        <WriteInput
          label="제목"
          //  value={data ? data.title : ''}
          value={writeForm.title}
          name="title"
          handleChange={handleChange}
        />
        <S.WriteInputsBox>
          <WriteInput
            label="가격"
            // value={data ? data.price : ''}
            value={writeForm.price}
            name="price"
            type="number"
            handleChange={handleChange}
          />
          <WriteInput
            label="재고 수량"
            //  value={data ? data.amount : ''}
            value={writeForm.amount}
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <WriteInput
            label="판매 기간"
            // value={data ? data.closingAt.split('.').join('-') : ""}
            value={writeForm.closingAt}
            handleChange={handleChange}
            type="date"
            name="closingAt"
          />
        </S.WriteInputsBox>
        <S.SelectBox>
          <Select
            array={genreType}
            label="장르"
            name="genre"
            // value={data ? genreType.indexOf(data.genre) + 1 : ''}
            handleChange={handleChange}
            value={writeForm.genre}
          />
          <Select
            array={playerCountType}
            label="인원"
            name="playerCount"
            // value={data ? data.playerCount : ''}
            handleChange={handleChange}
            value={writeForm.playerCount}
          />
          <Select
            array={difficultyLevelType}
            label="난이도"
            name="difficultyLevel"
            // value={data ? data.difficultyLevel : ''}
            handleChange={handleChange}
            value={writeForm.difficultyLevel}
          />
          <Select
            array={playTimeType}
            label="플레이타임"
            name="playTime"
            // value={data ? data.playTime : ''}
            handleChange={handleChange}
            value={writeForm.playTime}
          />
        </S.SelectBox>
        <S.ImgTitle>썸네일 이미지</S.ImgTitle>
        <S.MainImgBox>
          <ImgInput name="mainImageUrl" value={mainImg} />
        </S.MainImgBox>
        <S.ImgTitle>상세 이미지</S.ImgTitle>
        <S.ImgInputBox>
          {imgList.map((item, index) => {
            return <ImgInput key={index} name={'img' + index} value={item} />;
          })}
        </S.ImgInputBox>
        <Button
          text={location.pathname === '/write' ? '작성 완료' : '수정 완료'}
          bgColor={theme.color.black}
          fontColor="white"
          width="100px"
        />
      </S.WriteForm>
    </S.WriteContainer>
  );
};

export default Write;
