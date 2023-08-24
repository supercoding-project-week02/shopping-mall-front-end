import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { addProduct, editProduct, getProduct } from '@/apis';
import Button from '@/components/common/Button/Button';
import EditImgItem from '@/components/write/EditImgItem/EditImgItem';
import ImgInput from '@/components/write/PreviewImgItem/ImgInput';
import Select from '@/components/write/Select/Select';
import WriteInput from '@/components/write/WriteInput/WriteInput';
import { theme } from '@/styles/theme';
import * as S from './Write.styles';
import { difficultyLevelType, genreType, playerCountType, playTimeType } from './writeData';

const Write = () => {
  const location = useLocation().pathname;
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

  const dateFormat = (closingAt) => {
    const date = new Date(closingAt);
    const year = date.getFullYear();
    const month = ('0' + (1 + date.getMonth())).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  };

  useEffect(() => {
    // productId가 있을 경우 로직
    if (productId) {
      // TODO: 상품 디테일 조회 api를 호출 이후 로직 수행
      // 로직 처리할 때 날짜는 변환해서 넣어야함
      getProduct(productId).then((result) => {
        if (result.status === 200) {
          let responseImgArray = [];
          setWriteForm({
            ...result.data,
            closingAt: dateFormat(result.data.closingAt),
          });
          setMainImg(result.data.mainImageUrl);
          result.data.imgUrls.map((item, index) => {
            responseImgArray[index] = item.imgUrl;
          });
          setImgList(responseImgArray);
        }
      });
    }
    setIsLoding(false);
  }, []);

  const mainImgBox =
    location === '/write' ? (
      <ImgInput name="mainImageUrl" value={mainImg} setImgValue={setMainImg} />
    ) : (
      <EditImgItem value={mainImg} />
    );

  const imgListBox = imgList.map((item, index) => {
    const returnComponent =
      location === '/write' ? (
        <ImgInput
          key={index}
          index={index}
          name={'img' + index}
          value={item}
          many="true"
          setImgValue={handleImgListChange}
        />
      ) : (
        <EditImgItem key={index} value={item} />
      );
    return returnComponent;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      if (result.status === 200) {
        alert('상품이 등록되었습니다.');
        navigate('/');
      }
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    writeForm.imgUrls ? delete writeForm.imgUrls : null;
    writeForm.mainImageUrl ? delete writeForm.mainImageUrl : null;
    editProduct(productId, {
      ...writeForm,
      genre: genreType.indexOf(writeForm.genre) + 1,
      closingAt: writeForm.closingAt.split('-').join('.'),
    }).then((result) => {
      if (result.status === 200) {
        alert('판매글 수정이 완료되었습니다.');
        navigate('/mypage');
      }
    });
  };

  return isLoding ? (
    <h1>로딩중입니다.</h1>
  ) : (
    <S.WriteContainer>
      <S.WriteForm onSubmit={location === '/write' ? handleSubmit : handleEditSubmit}>
        <WriteInput label="제목" value={writeForm.title} name="title" handleChange={handleChange} />
        <S.WriteInputsBox>
          <WriteInput
            label="가격"
            value={writeForm.price}
            name="price"
            type="number"
            handleChange={handleChange}
          />
          <WriteInput
            label="재고 수량"
            value={writeForm.amount}
            name="amount"
            type="number"
            handleChange={handleChange}
          />
          <WriteInput
            label="판매 기간"
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
            handleChange={handleChange}
            value={writeForm.genre}
          />
          <Select
            array={playerCountType}
            label="인원"
            name="playerCount"
            handleChange={handleChange}
            value={writeForm.playerCount}
          />
          <Select
            array={difficultyLevelType}
            label="난이도"
            name="difficultyLevel"
            handleChange={handleChange}
            value={writeForm.difficultyLevel}
          />
          <Select
            array={playTimeType}
            label="플레이타임"
            name="playTime"
            handleChange={handleChange}
            value={writeForm.playTime}
          />
        </S.SelectBox>
        <S.ImgTitle>썸네일 이미지</S.ImgTitle>
        <S.MainImgBox>
          {/* <ImgInput name="mainImageUrl" value={mainImg} setImgValue={setMainImg} /> */}
          {mainImgBox}
        </S.MainImgBox>
        <S.ImgTitle>상세 이미지</S.ImgTitle>
        <S.ImgInputBox>{imgListBox}</S.ImgInputBox>
        <Button
          text={location === '/write' ? '작성 완료' : '수정 완료'}
          bgColor={theme.color.black}
          fontColor="white"
          width="100px"
        />
      </S.WriteForm>
    </S.WriteContainer>
  );
};

export default Write;
