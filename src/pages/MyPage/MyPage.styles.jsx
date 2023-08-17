import { Table as _Table } from 'antd';
import styled from '@emotion/styled';

export const MyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 10rem;
`;

export const MenusWrapper = styled.aside`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  &.active > span {
    border-bottom: 2px solid #ffb002;
  }
`;

export const ContentWrapper = styled.div`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 50%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Title = styled.h2`
  font-size: 1.7rem;
`;

export const Table = styled(_Table)`
  & thead .ant-table-cell {
    background-color: #ffb002 !important;
  }
`;
