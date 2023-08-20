import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 99;
  background-color: #faf9f6;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
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
  margin: 1rem;
  cursor: pointer;
`;

export const mainLogo = styled.img`
  width: 100%;
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
