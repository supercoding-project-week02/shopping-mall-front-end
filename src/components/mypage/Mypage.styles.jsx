import { Table as _Table } from 'antd';
import styled from '@emotion/styled';

import TextField from '@/components/common/TextField/TextField.jsx';

export const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
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
