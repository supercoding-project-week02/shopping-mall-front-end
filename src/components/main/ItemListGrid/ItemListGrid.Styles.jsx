import styled from '@emotion/styled';

export const ItemListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
  height: auto;
`;

export const ItemListBox = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

export const GridCard = styled.div``;

export const GridImgBox = styled.div``;

export const GridImg = styled.img`
  border-radius: 0.5rem;
  width: 20rem;
  color: #fafafa;
`;

export const GridTextBox = styled.div``;

export const GridNameBox = styled.div`
  padding-top: 0.7rem;
  font-size: 0.7rem;
  color: #9a9a9a;
  font-weight: bold;
`;

export const GridTitleBox = styled.div`
  padding-top: 0.7rem;
  font-size: 0.8rem;
  color: #555560;
  font-weight: bold;
`;

export const GridPriceBox = styled.div`
  padding-top: 0.7rem;
  font-size: 0.9rem;
  color: #ffb002;
  font-weight: bold;
`;
