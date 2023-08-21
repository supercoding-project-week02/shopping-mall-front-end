import styled from '@emotion/styled';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  > img {
    width: 100%;
    height: 100%;
  }
`;

export const EmptyBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: xx-large;
`;

export const StyledImgLabel = styled.label`
  width: auto;
  border: 1px solid gray;
`;

export const StyledImgInput = styled.input`
  display: none;
`;
