import styled from '@emotion/styled';

import { theme } from '@/styles/theme.js';

export const UserProfileWrapper = styled.div`
  display: flex;
  padding: 2rem;
  gap: 5rem;
  border-radius: 0.5rem;
  border: 1px solid #595959;
  height: 300px;
  background-color: white;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  border: 1px solid #bfbfbf;
  background-color: ${theme.color.gray};
  width: 5rem;
  height: 5rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
