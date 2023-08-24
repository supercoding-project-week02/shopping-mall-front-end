import styled from '@emotion/styled';

import size from '@/styles/Media';

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

  ${size.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${size.small} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridCard = styled.div``;

export const GridImgBox = styled.div`
  cursor: pointer;
`;

export const GridImg = styled.img`
  border-radius: 0.5rem;
  width: 20rem;
  height: 20rem;
  color: #fafafa;
  ${size.large} {
    width: 30rem;
    height: 30rem;
  }

  ${size.medium} {
    width: 15rem;
    height: 15rem;
  }
`;

export const GridTextBox = styled.div``;

export const GridNameBox = styled.div`
  padding-top: 0.7rem;
  font-size: 0.7rem;
  color: #9a9a9a;
  font-weight: bold;
  margin-left: 0.2rem;
  ${size.large} {
    font-size: 1.2rem;
  }

  ${size.medium} {
    font-size: 0.5rem;
  }
`;

export const GridTitleBox = styled.div`
  padding-top: 0.7rem;
  font-size: 0.8rem;
  color: #555560;
  font-weight: bold;
  margin-left: 0.2rem;
  ${size.large} {
    font-size: 1.2rem;
  }

  ${size.medium} {
    font-size: 0.5rem;
  }
`;

export const GridPriceBox = styled.div`
  padding-top: 0.7rem;
  font-size: 0.9rem;
  color: #ffb002;
  font-weight: bold;
  margin-left: 0.2rem;
  ${size.large} {
    font-size: 1.2rem;
  }

  ${size.medium} {
    font-size: 0.5rem;
  }
`;

export const NoItemGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarContainer = styled.div`
  padding-top: 0.3rem;
  display: inline-block;
`;

export const Star = styled.span`
  font-size: 16px;
  color: ${(props) => (props.filled ? '#FFD700' : '#ccc')};
  ${size.large} {
    font-size: 24px;
  }

  ${size.medium} {
    font-size: 12px;
  }
`;
