import { useQuery } from '@tanstack/react-query';

import { getQuestionAnswers } from '@/apis/questions.js';
import * as S from './Mypage.styles.jsx';

const QuestionSellerTable = () => {
  const { data, isError } = useQuery(['question', 'seller'], getQuestionAnswers);

  if (!data) return null;
  if (isError) return <div>에러가 발생했습니다.</div>;

  const questions = data.data?.map((question, index) => ({
    key: index,
    id: question.productId,
    상품정보: (
      <S.ProductInfoWrapper>
        <img src={question.productMainImageUrl} alt="" width={50} height={50} />
        <div>
          <div>{question.productTitle}</div>
        </div>
      </S.ProductInfoWrapper>
    ),
    문의답변: <S.QuestionWrapper>{question.answerContent}</S.QuestionWrapper>,
  }));

  return (
    <S.Table //
      columns={questionSellerColumns}
      dataSource={questions}
      pagination={false}
    />
  );
};

const questionSellerColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '상품정보',
    dataIndex: '상품정보',
    key: '상품정보',
    width: 300,
  },
  {
    title: '문의답변',
    dataIndex: '문의답변',
    key: '문의답변',
    width: 300,
  },
];

export default QuestionSellerTable;
