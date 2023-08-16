import styled from '@emotion/styled';

import { theme } from '@/styles/theme.js';

export const UserProfileWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 100px;
  border-radius: 0.5rem;
  border: 1px solid red;
  width: 50%;
  height: 300px;
`;

export const Avatar = styled.image`
  border-radius: 100%;
  border: 1px solid black;
  width: 5rem;
  height: 5rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Line = styled.hr`
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 0.5rem;
  border: 1px solid ${theme.color.gray};
  background-color: transparent;
  padding: 0.5rem;
  cursor: pointer;
`;
