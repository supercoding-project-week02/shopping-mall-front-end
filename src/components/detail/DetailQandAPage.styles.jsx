import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const QContainer = styled.span`
  width: 1160px;
  height: 50px;
  border-bottom: 1px solid ${theme.color.gray};
  padding-top: 3px;
`;

export const QTitleHeader = styled.span`
  width: 1160px;
  height: 50px;
  display: flex;
  cursor: pointer;
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

export const QTitleContent = styled.span`
  display: flex;
  justify-content: space-evenly;
  width: 1160px;
  height: 80px;
`;

export const QContentContainer = styled.span`
  width: 1160px;
  height: 80px;
  display: flex;
  h2 {
    padding-left: 95px;
    padding-right: 5px;
    font-size: 20px;
    font-weight: bolder;
    color: ${theme.color.yellow};
  }
`;

export const QContent = styled.div`
  width: 730px;
  justify-content: start;
  align-items: center;
  padding-top: 10px;
`;
