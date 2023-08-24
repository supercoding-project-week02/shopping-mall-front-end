import styled from '@emotion/styled';

import size from '@/styles/Media';

export const FilterOptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

export const FilterBtnBox = styled.div`
  width: 60%;
`;

export const BtnTrack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const BtnWrapper = styled.div`
  margin-left: 0.8rem;
`;

export const ToggleBtn = styled.button`
  width: 7rem;
  height: 2rem;
  border: none;
  background-color: #efebeb;
  border-radius: 0.9375rem;
  font-size: 0.7rem;
  transition: 0.2s;
  :hover {
    background-color: #fef0d1;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
    font-weight: bold;
  }
  cursor: pointer;
  ${size.large} {
    width: 12rem;
    height: 3rem;
    font-size: 1rem;
  }

  ${size.medium} {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
  }
  ${size.small} {
    width: 4rem;
    height: 1.2rem;
    font-size: 0.2rem;
  }
`;

export const ToggleBtnChecked = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 7rem;
  height: 2rem;
  border: none;
  background-color: #fef0d1;
  border-radius: 0.9375rem;
  font-size: 0.7rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  font-weight: bold;
  cursor: pointer;
  ${size.large} {
    width: 12rem;
    height: 3rem;
    font-size: 1.2rem;
  }

  ${size.medium} {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
  }
  ${size.small} {
    width: 4rem;
    height: 1.2rem;
    font-size: 0.2rem;
  }
`;
