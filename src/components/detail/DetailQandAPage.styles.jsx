import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const QandAPage = styled.div`
  margin-top: 50px;
  margin-bottom: 200px;
`;

export const QandAHeader = styled.div`
  width: 1160px;
  border-bottom: 1px solid ${theme.color.black};

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  p {
    font-size: 13px;
    margin-bottom: 15px;
    color: #878687;
  }
`;

export const QandABtn = styled.button`
  background-color: ${theme.color.black};
  color: white;
  font-size: 12px;
  font-weight: bolder;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0 13px 0;

  &:hover {
    background-color: ${theme.color.yellow};
    color: ${theme.color.black};
    transition: 0.3s ease-in-out;
  }
`;

export const QandAContent = styled.div`
  width: 1160px;
`;

export const QandABoardTitle = styled.span`
  width: 1160px;
  height: 40px;
  display: flex;
  border-top: 1px solid ${theme.color.black};
  border-bottom: 1px solid ${theme.color.gray};
  font-size: 12px;
  padding: 3px 0 3px 0;
`;

export const QContainer = styled.span`
  width: 1160px;
  height: 50px;
  padding-top: 3px;
`;

export const QTitleHeader = styled.span`
  width: 1160px;
  height: 50px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid ${theme.color.gray};
`;

export const QUserName = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QTitle = styled.div`
  width: 920px;
  padding-left: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const QDate = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QandA = styled.span`
  width: 1160px;
  height: 80px;
`;

export const QContentWrapper = styled.span`
  display: flex;
  justify-content: space-evenly;
  padding-right: 25px;
`;

export const QContent = styled.span`
  width: 1160px;
  height: 60px;
  display: flex;
  align-items: center;
  h2 {
    padding: 0 5px 5px 95px;
    font-size: 20px;
    font-weight: bolder;
    color: ${theme.color.yellow};
  }
`;

export const Q = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const QImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnswerButton = styled.button`
  border: none;
  background-color: ${theme.color.yellow};
  border-radius: 5px;
  width: 80px;
  height: 40px;
  margin-right: 25px;
  cursor: pointer;
  font-weight: bold;
`;

export const AnswerPutButton = styled(AnswerButton)``;

export const PutButton = styled(AnswerButton)``;

export const AnswerInputContainer = styled.div`
  display: flex;
`;

export const AnswerInput = styled.div`
  display: flex;
  padding-left: 100px;
  input {
    width: 800px;
    height: 80px;
    border: 1px solid ${theme.color.gray};
    border-radius: 5px;
    margin-bottom: 10px;
    &:focus {
      outline: none;
      border: 2px solid ${theme.color.yellow};
    }
  }
`;

export const AnswerSubmitBtn = styled.button`
  border: none;
  background-color: ${theme.color.yellow};
  border-radius: 5px;
  width: 80px;
  height: 40px;
  margin-left: 25px;
  font-weight: bold;
  cursor: pointer;
`;

export const AContentWrapper = styled.span`
  display: flex;
`;

export const AContent = styled.div`
  width: 1160px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${theme.color.gray};
  h2 {
    padding: 0 5px 5px 110px;
    font-size: 20px;
    font-weight: bolder;
    color: ${theme.color.yellow};
  }
`;

export const AContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const A = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
