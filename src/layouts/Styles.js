import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #faf9f6;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 99;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);
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
  height: 4rem;
  background-color: grey;
  margin: 1rem;
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
  background-color: grey;
  margin: 1rem;
`;

export const ProductAddBtnBox = styled.div`
  background-color: blue;
  margin-right: 1rem;
`;

export const CartBtnBox = styled.div`
  background-color: red;
  margin-right: 1rem;
`;

export const MyInfoBtnBox = styled.div`
  background-color: green;
  margin-right: 1rem;
`;

export const SearchBtnBox = styled.div`
  background-color: yellow;
  margin-right: 1rem;
`;
