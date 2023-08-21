import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const InfoContainer = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoBar = styled.span`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  z-index: 100;
  width: 1161px;
  height: 42px;
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
  overflow: hidden;
  margin-top: 20px;
  width: 800px;
  height: ${(props) => {
    props.showAll ? '100%' : '100px';
  }};
`;

export const Img = styled.img``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const QandAPage = styled.div`
  margin-bottom: 200px;
`;

export const QandAHeader = styled.div`
  width: 1160px;

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  p {
    font-size: 13px;
    margin-bottom: 8px;
    color: #878687;
  }
`;

export const QandAButton = styled.button`
  background-color: ${theme.color.black};
  color: white;
  font-size: 12px;
  font-weight: bolder;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0 13px 0;

  &:hover {
    background-color: ${theme.color.yellow};
    color: ${theme.color.black};
    transition: 0.3s ease-in-out;
  }
`;

export const QandAContent = styled.div`
  width: 1160px;
`;

export const QandABoard = styled.span`
  width: 1160px;
  height: 40px;
  display: flex;
  border-top: 1px solid ${theme.color.black};
  border-bottom: 1px solid ${theme.color.gray};
  font-size: 12px;
  padding: 3px 0 3px 0;
`;

export const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 40px;
`;

export const QandATitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 40px;
`;
export const QandADate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 40px;
`;