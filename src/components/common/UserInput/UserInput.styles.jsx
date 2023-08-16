import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const InputDiv = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 19px;
  width: 100%;
  height: 40px;
  border: 1px solid ${theme.color.gray};
  background-color: white;
  > input {
    width: 70%;
    height: 50%;
    border: none;
  }
  > button {
    width: 70px;
    height: 20px;
    border: none;
    background-color: ${theme.color.gray};
    border-radius: 10px;
    font-size: 12px;
    color: #878585;
  }
`;
