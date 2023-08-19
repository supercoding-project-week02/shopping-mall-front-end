import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const HeaderContainer = styled.div`
  margin: 0 250px 0 250px;
  height: 600px;
  display: flex;
`;

export const ImageContainer = styled.div``;

export const Image = styled.div`
  width: 500px;
  height: 550px;
  margin-right: 20px;
`;

export const Content = styled.div`
  width: 424px;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.div`
  width: 424px;
`;

export const GameName = styled.div`
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: bold;
`;

export const Company = styled.span`
  display: flex;
  margin: 6px 0 3px 3px;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 5px;
`;

export const CompanyTitle = styled.div`
  margin-right: 3px;
`;

export const CompanyName = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const ContentTitle = styled.div`
  font-weight: bold;
  margin-right: 30px;
  div {
    margin-bottom: 20px;
    margin-left: 3px;
  }
`;

export const ContentValue = styled.div`
  div {
    margin-bottom: 20px;
  }
`;

export const ButtonWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const PlusCartButton = styled.button`
  width: 208px;
  background-color: ${theme.color.yellow};
  padding: 15px 0 15px 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

export const ClickHeartButton = styled.button`
  width: 206px;
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #dddddd;
  background-color: white;
  cursor: pointer;
`;
