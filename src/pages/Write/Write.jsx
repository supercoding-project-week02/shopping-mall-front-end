import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addProduct } from '@/apis';
import Button from '@/components/common/Button/Button';
import ImgInput from '@/components/write/PreviewImgItem/ImgInput';
import Select from '@/components/write/Select/Select';
import WriteInput from '@/components/write/WriteInput/WriteInput';
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
  const navigate = useNavigate();
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
  const [imgList, setImgList] = useState([null, null, null, null, null]);
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

  const handleImgListChange = useCallback(
    (index, value) => {
      let copyImgList = [...imgList];
      copyImgList[index] = value;
      setImgList(copyImgList);
    },
    [imgList],
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const payload = {
    //   title: writeForm.title,
    //   price: writeForm.price,
    //   closingAt: writeForm.closingAt.split('-').join('.'),
    //   genre: genreType.indexOf(writeForm.genre) + 1,
    //   playTime: writeForm.playTime,
    //   playerCount: writeForm.playerCount,
    //   difficultyLevel: writeForm.difficultyLevel,
    //   amount: writeForm.amount,
    //   mainImageFile: mainImg,
    //   imageFiles: imgList.filter((item) => item),
    // };
    // console.log(payload);
    // const response = await axios.post(
    //   'http://52.79.168.48:8080/api/v1/product',
    //   {
    //     title: writeForm.title,
    //     price: writeForm.price,
    //     closingAt: writeForm.closingAt.split('-').join('.'),
    //     genre: genreType.indexOf(writeForm.genre) + 1,
    //     playTime: writeForm.playTime,
    //     playerCount: writeForm.playerCount,
    //     difficultyLevel: writeForm.difficultyLevel,
    //     amount: writeForm.amount,
    //     mainImageFile: mainImg,
    //     imageFiles: imgList,
    //   },
    //   {
    //     headers: {

    //       'Content-Type': `multipart/form-data`,
    //     },
    //   },
    // );

    // console.log(response);
    // if (response.data.status === 200) {
    //   alert('상품이 등록되었습니다.');
    //   navigate('/');
    // }
    // const data = {
    //   title: writeForm.title,
    //   price: writeForm.price,
    //   closingAt: writeForm.closingAt.split('-').join('.'),
    //   genre: genreType.indexOf(writeForm.genre) + 1,
    //   playTime: writeForm.playTime,
    //   playerCount: writeForm.playerCount,
    //   difficultyLevel: writeForm.difficultyLevel,
    //   amount: writeForm.amount,
    //   mainImageFile: mainImg,
    // };

    const formData = new FormData();

    imgList.forEach((file) => {
      file && formData.append('imageFiles', file);
    });
    formData.append('amount', writeForm.amount);
    formData.append('closingAt', writeForm.closingAt.split('-').join('.'));
    formData.append('difficultyLevel', writeForm.difficultyLevel);
    formData.append('genre', genreType.indexOf(writeForm.genre) + 1);
    formData.append('playTime', writeForm.playTime);
    formData.append('playerCount', writeForm.playerCount);
    formData.append('price', writeForm.price);
    formData.append('title', writeForm.title);
    formData.append('mainImageFile', mainImg);

    addProduct(formData).then((result) => {
      console.log(result);
      if (result.status === 200) {
        alert('상품이 등록되었습니다.');
        navigate('/');
      }
    });
  };

  console.log(genreType.indexOf(writeForm.genre) + 1);
  console.log('mainImg=>', mainImg);
  console.log('imgList=>', imgList);

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
          <ImgInput name="mainImageUrl" value={mainImg} setImgValue={setMainImg} />
        </S.MainImgBox>
        <S.ImgTitle>상세 이미지</S.ImgTitle>
        <S.ImgInputBox>
          {imgList.map((item, index) => {
            return (
              <ImgInput
                key={index}
                index={index}
                name={'img' + index}
                value={item}
                many="true"
                setImgValue={handleImgListChange}
              />
            );
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
