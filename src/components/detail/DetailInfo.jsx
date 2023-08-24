import { useState } from 'react';
import * as S from './DetailInfo.styles';
import DetailReviewPage from './DetailReviewPage';
// import DetailQandAPage from './DetailQandAPage';

export default function DetailInfo({ product }) {
  const [showAll, setShowAll] = useState(false);

  const toggleImage = () => {
    setShowAll(!showAll);
  };

  return (
    <S.InfoContainer>
      <S.InfoBar>
        <S.DetailInfomationBar>상세정보</S.DetailInfomationBar>
        <S.ReviewBar>구매평</S.ReviewBar>
        <S.QandABar>Q&A</S.QandABar>
      </S.InfoBar>
      <S.DetailInfoPage>
        <S.ImgContainer showAll={showAll}>
          <div>
            {product.imgUrls.map((img, idx) => (
              <S.Img key={idx} src={img} />
            ))}
          </div>
        </S.ImgContainer>
        <S.ButtonContainer>
          <S.ShowAllButton onClick={toggleImage}>
            {showAll ? '상세정보 접기' : '상세정보 펼쳐보기'}
          </S.ShowAllButton>
        </S.ButtonContainer>
      </S.DetailInfoPage>
      <S.ReviewPage>
        <S.ReviewHeader>
          <h2>구매평</h2>
          <S.ReviewBtn>구매평 작성</S.ReviewBtn>
        </S.ReviewHeader>
        <DetailReviewPage />
      </S.ReviewPage>
      {/* <DetailQandAPage product={product} /> */}
    </S.InfoContainer>
  );
}
