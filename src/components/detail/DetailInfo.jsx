import { useState } from 'react';
import * as S from './DetailInfo.styles';

export default function DetailInfo() {
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
          <S.Img src="http://gi.esmplus.com/pstoys/product/5/5body.jpg" alt="detailInfoImage" />
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
        <S.ReviewBoard>리뷰내용</S.ReviewBoard>
      </S.ReviewPage>
      <S.QandAPage>
        <S.QandAHeader>
          <h2>Q&A</h2>
          <p>구매하시려는 상품에 대해 궁굼한 점이 있으면 문의주세요.</p>
          <S.QandABtn>상품문의</S.QandABtn>
        </S.QandAHeader>
        <S.QandAContent>
          <S.QandABoardTitle>
            <S.UserName>작성자</S.UserName>
            <S.QandATitle>제목</S.QandATitle>
            <S.QandADate>등록일</S.QandADate>
          </S.QandABoardTitle>
        </S.QandAContent>
      </S.QandAPage>
    </S.InfoContainer>
  );
}
