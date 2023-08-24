import { Table as _Table } from 'antd';
import styled from '@emotion/styled';

import TextField from '@/components/common/TextField/TextField.jsx';

export const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  max-width: 300px;
`;

export const Table = styled(_Table)`
  & thead .ant-table-cell {
    background-color: #ffb002 !important;
  }
`;

export const InputText = styled(TextField)`
  span {
    width: 60px;
  }
  & input {
    flex: none;
    width: 50px;
  }
`;

// QuestionCustomerTable
export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 0.2rem;
`;

export const QuestionItemTitle = styled.span`
  font-weight: bold;
`;

export const QuestionItemContent = styled.span``;
