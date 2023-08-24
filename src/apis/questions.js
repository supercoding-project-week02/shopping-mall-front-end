import { client } from '@/apis/index.js';

// GYU-TODO; DELETE seller 는 questions/answers/me 로 답변만 봐야함!
// 커스터머는 questions/me 로 문의 리스트만 봐야함!

// 커스터머
export const getQuestions = async () => {
  const response = await client.get('/questions/me');
  return response.data;
};

// 셀러
export const getQuestionAnswers = async () => {
  const response = await client.get('/questions/answers/me');
  return response.data;
};
