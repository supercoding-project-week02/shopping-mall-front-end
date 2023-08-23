import { useState } from 'react';
import * as S from './DetailInfo.styles';
import DetailReviewPage from './DetailReviewPage';
import DetailQandAPage from './DetailQandAPage';
import QandAModal from '../detailModal/QAModal/QandAModal';

export default function DetailInfo() {
  const [showAll, setShowAll] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const modalIsOpen = () => {
    setIsOpen(true);
  };

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
        <DetailReviewPage />
      </S.ReviewPage>
      <S.QandAPage>
        <S.QandAHeader>
          <h2>Q&A</h2>
          <p>구매하시려는 상품에 대해 궁굼한 점이 있으면 문의주세요.</p>
          <QandAModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <S.QandABtn onClick={modalIsOpen}>상품문의</S.QandABtn>
        </S.QandAHeader>
        <S.QandAContent>
          <DetailQandAPage />
        </S.QandAContent>
      </S.QandAPage>
    </S.InfoContainer>
  );
}
