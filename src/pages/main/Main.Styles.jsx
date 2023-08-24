import styled from '@emotion/styled';

import size from '@/styles/Media.js';

export const MainPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const MainContainer = styled.div`
  width: 80%;
`;

export const ToTopBtn = styled.button`
  position: fixed;
  top: 80%;
  left: 90%;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  z-index: 3;
  border: none;
  background-color: #ffebc0;
  color: grey;
  cursor: pointer;

  ${size.medium} {
    left: 80%;
    background-color: green;
  }
  ${size.small} {
    left: 70%;
    background-color: red;
  }
`;
