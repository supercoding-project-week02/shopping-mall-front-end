import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 99;
  background-color: #faf9f6;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;

  ${({ isFixed }) => css`
    position: ${isFixed ? 'fixed' : 'relative'};
    transition:
      top 0.3s ease-in-out,
      position 0.3s ease-in-out;
    top: ${isFixed ? '0' : 'auto'};
  `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: auto;
  min-height: fit-content;
`;

export const HeaderLogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  background-color: grey;
  margin: 1rem;
  cursor: pointer;
`;

export const HeaderRightBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderBtnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const ProductAddBtnBox = styled.div`
  margin-right: 0.7rem;
  cursor: pointer;
`;

export const CartBtnBox = styled.div`
  margin-right: 0.7rem;
  cursor: pointer;
`;

export const MyInfoBtnBox = styled.div`
  margin-right: 0.7rem;
  cursor: pointer;
`;

export const SearchBtnBox = styled.div`
  margin-right: 0.7rem;
  cursor: pointer;
`;
