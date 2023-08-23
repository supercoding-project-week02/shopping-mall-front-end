import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

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

export const QNumber = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QTitle = styled.div`
  width: 840px;
  padding-left: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const QName = styled.div`
  width: 130px;
  display: flex;
  justify-content: center;
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

export const IconWrapper = styled.div`
  padding-top: 10px;
  padding-right: 10px;
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

export const A = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
