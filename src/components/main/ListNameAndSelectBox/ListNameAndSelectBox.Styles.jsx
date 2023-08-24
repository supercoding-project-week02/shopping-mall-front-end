import styled from '@emotion/styled';

import size from '@/styles/Media';

export const ListNameAndSelectBox = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${size.large} {
    height: 6rem;
  }

  ${size.medium} {
    height: 3rem;
  }
  ${size.small} {
  }
`;

export const GridListLengthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  margin-left: 2rem;
  ${size.large} {
    font-size: 1.2rem;
  }

  ${size.medium} {
    font-size: 0.5rem;
  }
  ${size.small} {
  }
`;

export const GridListLength = styled.span`
  color: #ffb002;
`;

export const SelectFilterBox = styled.div`
  margin-right: 2rem;
`;

export const SelectFilter = styled.select`
  background-color: #fafafa;
  border: none;
  width: 6rem;
  ${size.large} {
    font-size: 1.2rem;
  }

  ${size.medium} {
    font-size: 0.5rem;
  }
  ${size.small} {
  }
`;
