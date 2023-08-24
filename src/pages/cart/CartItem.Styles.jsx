import styled from '@emotion/styled';

export const Wrapper = styled.li`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ImageWrapper = styled.img`
  height: 60px;
  width: 60px;
  float: left;
  margin-right: 16px;
  border: 1px solid var(--line-gray);
  border-radius: 8px;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
`;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;
export const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;
export const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;
