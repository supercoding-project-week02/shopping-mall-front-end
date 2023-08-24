import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const ReviewContainer = styled.div`
  width: 1160px;
  height: 50px;
  border-bottom: 1px solid ${theme.color.gray};
  padding-top: 3px;
  display: flex;
  align-items: center;
`;

export const ReviewStar = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReviewContent = styled.div`
  width: 730px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
`;

export const ReviewDate = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Reviewer = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
