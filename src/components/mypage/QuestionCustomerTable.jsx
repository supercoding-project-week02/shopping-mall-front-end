import { useQuery } from '@tanstack/react-query';

import { getQuestions } from '@/apis/questions.js';
import * as S from './Mypage.styles.jsx';

const QuestionCustomerTable = () => {
  const { data, isError } = useQuery(['question', 'customer'], getQuestions);

  if (!data) return null;
  if (isError) return <div>에러가 발생했습니다.</div>;

  const questions = data.data.map((question, index) => ({
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
    문의내용: (
      <S.QuestionWrapper>
        <S.QuestionItemTitle>제목: {question.questionTitle}</S.QuestionItemTitle>
        <S.QuestionItemContent>내용 : {question.questionContent}</S.QuestionItemContent>
      </S.QuestionWrapper>
    ),
  }));

  return (
    <S.Table //
      columns={questionCustomerColumns}
      dataSource={questions}
      pagination={true}
    />
  );
};

const questionCustomerColumns = [
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
    title: '문의내용',
    dataIndex: '문의내용',
    key: '문의내용',
    width: 300,
  },
];

export default QuestionCustomerTable;
