import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const InfoContainer = styled.div`
  max-width: 2100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoBar = styled.span`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  z-index: 100;
  width: 100%;
  height: 42px;
  background-color: #f4f4f4;
`;
export const DetailInfomationBar = styled.div`
  border: none;
  cursor: pointer;
  width: 387px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
`;
export const ReviewBar = styled(DetailInfomationBar)``;
export const QandABar = styled(DetailInfomationBar)``;

export const DetailInfoPage = styled.div``;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
  width: 800px;
  height: ${(props) => (props.showAll ? 'auto' : '400px')};
`;

export const Img = styled.img`
  width: 800px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  margin: 10px 0;
`;

export const ShowAllButton = styled.button`
  width: 170px;
  height: 50px;
  padding: 15px 0 15px 0;
  border-radius: 5px;
  border: none;
  background-color: ${theme.color.yellow};
  color: white;
  cursor: pointer;
`;

export const ReviewPage = styled.div``;

export const ReviewHeader = styled.div`
  width: 1160px;
  border-bottom: 1px solid ${theme.color.black};
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ReviewBtn = styled.button`
  background-color: ${theme.color.black};
  color: white;
  font-size: 12px;
  font-weight: bolder;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 0 13px 0;

  &:hover {
    background-color: ${theme.color.yellow};
    color: ${theme.color.black};
    transition: 0.3s ease-in-out;
  }
`;

export const ReviewBoard = styled.div`
  width: 1160px;
  border-top: 1px solid ${theme.color.black};
  margin-bottom: 20px;
`;
