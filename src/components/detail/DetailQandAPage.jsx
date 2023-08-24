import { useEffect, useRef, useState } from 'react';
import * as S from './DetailQandAPage.styles';
import { Icon } from '../common/Icon/Icon';
import QandAModal from '../detailModal/QAModal/QandAModal';
import { useRecoilValue } from 'recoil';
import { customerState } from '@/recoil/atoms/userState';
import { client } from '@/apis';

export default function DetailQandAPage({ product }) {
  const isCustomer = useRecoilValue(customerState);

  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [updateQnA, setUpdateQnA] = useState({});
  const [isInputVisible, setInputVisible] = useState(false);
  const [question, setQuestion] = useState([]);

  const answerRef = useRef();

  const modalIsOpen = () => {
    setUpdateQnA(() => {});
    setTimeout(() => setIsOpen(true), 300);
  };

  useEffect(() => {
    syncQuestion();
  }, []);

  const syncQuestion = () => {
    client.get(`/questions/${product.productIdx}`).then((res) => {
      const data = res.data.data;
      setQuestion(data);
    });
  };

  const addQnAHandler = (newQnA) => {
    setQuestion((prevData) => [...prevData, { id: prevData.length + 1, ...newQnA }]);
  };

  const updataQnAHandler = (Q) => {
    console.log('updataQnAHandler', Q);
    setUpdateQnA(Q);
    setIsOpen(true);
  };

  // const handlerSubmitUpdateQnA = (updatedId, updatedQnA) => {
  //   setQuestion((prev) => prev.map((item) => (item.questionId === updatedId ? updatedQnA : item)));
  // };

  const deleteQnAHandler = (questinoId) => {
    client.delete(`/questions/${questinoId}`).then((res) => {
      syncQuestion();
    });
  };

  const titleClickContentVisible = (id, question) => {
    // question.answer = null 아니면 {}
    if (selectedId === id) {
      // 똑같은 거 클릭! => 기존 데이터들 초기화
      setSelectedId(null);
      setSelectedQuestion(null);
      setAnswer('');
    } else {
      // 나 선택했어
      setSelectedId(id);
      setSelectedQuestion(question);
      setAnswer(question.answer ? question.answer.content : '');
    }
  };

  const clickInputVisibilityHandler = () => {
    setInputVisible(!isInputVisible);
  };

  const handleUpdateAnswer = (selectedQuestion) => {
    clickInputVisibilityHandler();
  };

  // const sortedQandAData = [...question].sort((a, b) => b.id - a.id);

  // console.log('question.questionId', question.questionId);

  // 답변 작성 기능
  // const answerClickSubmitHanlder = () => {
  //   client.post(
  //     '/questions/answers',
  //     {
  //       questionIdx: selectedId,
  //       content: answer,
  //     },
  //     {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     },
  //   );
  //   // .then((res) => {
  //   //   syncQuestion();
  //   // });

  //   setInputVisible(false);
  // };

  // console.log('selectedId', selectedId);

  function answerClickSubmitHanlder() {
    // const obj = { a: '12', b: 'asdf' };
    // Object.keys(obj); // [a, b]
    // const addAnswer = !!Object.keys(answer.content ?? {}).length == 0;

    // const addAnswer = answer ? answer?.content?.length == 0 : true;
    let addAnswer = true;
    if (answer) {
      if (answer.content.length >= 1) {
        // 수정모드
        addAnswer = false;
      }
    }
    console.log('answerClickSubmitHanlder answer', answer, addAnswer);
    if (addAnswer) {
      client
        .post(
          '/questions/answers',
          {
            questionIdx: selectedId,
            content: answer,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((res) => {
          syncQuestion();
        });

      setInputVisible(false);
    } else {
      console.log(
        'selectedQuestion',
        selectedQuestion,
        'selectedQuestion.answer.answerId',
        selectedQuestion.answer.answerId,
      );
      client
        .post(`/questions/answers/${selectedQuestion.answer.answerId}`, {
          answerIdx: selectedQuestion.answer.answerId,
          content: answer,
        })
        .then((res) => {
          syncQuestion();
        });
      setInputVisible(false);
    }
  }
  // console.log('answerId', question.answer.answerId);

  const answerDeleteClickHandler = () => {
    console.log('call delete');
    client.delete(`/questions/answers/${selectedQuestion.answer.answerId}`).then((res) => {
      syncQuestion();
    });
  };

  return (
    <S.QandAPage>
      <S.QandAHeader>
        <h2>Q&A</h2>
        <p>구매하시려는 상품에 대해 궁굼한 점이 있으면 문의주세요.</p>
        <QandAModal
          isOpen={isOpen}
          productId={product.productIdx}
          setIsOpen={setIsOpen}
          onAddQnA={addQnAHandler}
          updateData={updateQnA}
          syncQuestion={syncQuestion}
        />
        {isCustomer && <S.QandABtn onClick={modalIsOpen}>상품문의</S.QandABtn>}
      </S.QandAHeader>
      {question &&
        question.map((Q, idx) => (
          <S.QandAContent>
            <S.QContainer key={idx}>
              <S.QTitleHeader onClick={() => titleClickContentVisible(Q.questionId, Q)}>
                <S.QUserName>{Q.consumerName}</S.QUserName>
                <S.QTitle>{Q.title}</S.QTitle>
                <S.QDate>{Q.createAt}</S.QDate>
              </S.QTitleHeader>

              {selectedId === Q.questionId && (
                <S.QandA>
                  <S.QContentWrapper>
                    <S.QContent>
                      <h2>Q</h2>
                      <S.Q>{Q.content}</S.Q>
                      {Q.imageUrl && <S.QImage>{Q.imageUrl}</S.QImage>}
                    </S.QContent>
                    <S.ButtonWrapper>
                      {!isCustomer && (
                        <>
                          {answer ? (
                            <S.AnswerPutButton onClick={() => handleUpdateAnswer(Q)}>
                              답변 수정
                            </S.AnswerPutButton>
                          ) : (
                            <S.AnswerButton onClick={clickInputVisibilityHandler}>
                              답변
                            </S.AnswerButton>
                          )}
                        </>
                      )}
                      {isCustomer && (
                        <>
                          <S.PutButton onClick={() => updataQnAHandler(Q)}>수정</S.PutButton>
                          <Icon
                            name="IconX"
                            size={15}
                            onClick={() => deleteQnAHandler(Q.questionId)}
                          />
                        </>
                      )}
                    </S.ButtonWrapper>
                  </S.QContentWrapper>
                  <S.AnswerInputContainer>
                    {isInputVisible && (
                      <S.AnswerInput>
                        <input
                          type="text"
                          placeholder="답변 내용"
                          value={answer}
                          ref={answerRef}
                          onChange={(e) => setAnswer(e.target.value)}
                        />
                        <S.AnswerSubmitBtn onClick={answerClickSubmitHanlder}>
                          작성
                        </S.AnswerSubmitBtn>
                      </S.AnswerInput>
                    )}
                  </S.AnswerInputContainer>
                  {/* {Q.answer && Q.answer.content && ( */}
                  {Q.answer && (
                    <S.AContentWrapper>
                      <S.AContent>
                        <h2>A</h2>
                        <S.AContainer>
                          <S.A>{Q.answer?.content}</S.A>
                          {!isCustomer && (
                            <Icon
                              name="IconX"
                              size={15}
                              onClick={() => answerDeleteClickHandler(answer.answerId)}
                            />
                          )}
                        </S.AContainer>
                      </S.AContent>
                    </S.AContentWrapper>
                  )}
                </S.QandA>
              )}
            </S.QContainer>
          </S.QandAContent>
        ))}
    </S.QandAPage>
  );
}
