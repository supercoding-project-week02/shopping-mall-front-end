import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: auto;
  /* background-color: aqua; */
`;

export const AddProfile = styled.span`
  font-size: 12px;
  margin-bottom: 19px;
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-top: 45px;
  font-weight: 600;
`;

export const CheckBtn = styled.button`
  width: 70px;
  height: 20px;
  border-radius: 10px;
  background-color: ${theme.color.black};
  color: white;
  border: none;
  font-size: 12px;
  cursor: pointer;
  &:disabled {
    background-color: ${theme.color.gray};
    color: ${theme.color.black};
  }
`;

export const RadioBox = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
