import styled from '@emotion/styled';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import size from '@/styles/Media';
import { theme } from '@/styles/theme';

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
  cursor: pointer;
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
  ${size.large} {
    width: 20rem;
    height: 6rem;
  }

  ${size.medium} {
    width: 8rem;
    height: 2rem;
  }
  ${size.small} {
    width: 6rem;
    height: 1rem;
  }
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
  margin-right: 1rem;
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

export const SearchBar = styled.input`
  width: 10rem;
  border: none;
  background-color: #fafafa;
  border-bottom: 1px solid grey;
  font-size: 0.7rem;
  color: grey;
  ::placeholder {
    color: grey;
    font-size: 0.7rem;
  }
  &:focus {
    outline: none;
  }
`;

export const LogoutBtn = styled.button`
  border: none;
  background-color: inherit;
  color: ${theme.color.red};
  cursor: pointer;
`;

export const ResponsiveIcon = styled(Icon)`
  ${size.small} {
    width: 15px;
  }
`;
