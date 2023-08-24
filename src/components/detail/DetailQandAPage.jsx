import { useState } from 'react';
import * as S from './DetailQandAPage.styles';
import { Icon } from '../common/Icon/Icon';

const QandAData = [
  {
    id: 1,
    title: '배송 문의',
    content: '3일 전에 주문했는데 언제 도착하나요?',
    name: '김희진',
    date: '2023.08.09',
    answer: '배송은 3~5일정도 소요됩니다. 그 이후에도 배송이 진행되지 않았다면 다시 문의주세요.',
  },
  {
    id: 2,
    title: '교환 문의드립니다',
    content: '박스가 찌그러져서 왔어요 교환 문의드립니다.',
    name: '김지우',
    date: '2023.08.18',
    answer: null,
  },
];

export default function DetailReviewPage() {
  const lastNameBlind = (name) => {
    return name.slice(0, -1) + '*';
  };

  const [selectedId, setSelectedId] = useState(null);

  const titleClickContentVisible = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  const sortedQandAData = QandAData.sort((a, b) => b.id - a.id);

  return (
    <>
      {sortedQandAData.map((QA) => (
        <S.QContainer key={QA.id}>
          <S.QTitleHeader onClick={() => titleClickContentVisible(QA.id)}>
            <S.QNumber>{QA.id}</S.QNumber>
            <S.QName>{lastNameBlind(QA.name)}</S.QName>
            <S.QTitle>{QA.title}</S.QTitle>
            <S.QDate>{QA.date}</S.QDate>
          </S.QTitleHeader>
          {selectedId === QA.id && (
            <S.QandA>
              <S.QContentWrapper>
                <S.QContent>
                  <h2>Q</h2>
                  <S.Q>{QA.content}</S.Q>
                </S.QContent>
                <S.IconWrapper>
                  <Icon name="IconX" size={15} />
                </S.IconWrapper>
              </S.QContentWrapper>
              {QA.answer && (
                <S.AContentWrapper>
                  <S.AContent>
                    <h2>A</h2>
                    <S.A>{QA.answer}</S.A>
                  </S.AContent>
                </S.AContentWrapper>
              )}
            </S.QandA>
          )}
        </S.QContainer>
      ))}
    </>
  );
}
