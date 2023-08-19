import styled from '@emotion/styled';

import Button from '@/components/common/Button/Button';
import { theme } from '@/styles/theme';

export const LoginContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 130px;
`;

export const LoginForm = styled.form`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  margin-top: 26px;
`;

export const BorderDiv = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  > div {
    background-color: #e7eaee;
    height: 1px;
    width: 40%;
  }
  > p {
    flex: 1;
  }
`;

export const KakaoLoginButton = styled(Button)`
  font-weight: 600;
`;

export const LinkToJoin = styled.p`
  margin-top: 43px;
  font-size: 12px;
  color: gray;
  > a {
    color: ${theme.color.red};
  }
`;
