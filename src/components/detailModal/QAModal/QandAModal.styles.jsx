import styled from '@emotion/styled';
import { theme } from '@/styles/theme';

export const QandAModalBackground = styled.div`
  background-color: ${({ isOpen }) => (isOpen ? ' rgba(0, 0, 0, 0.8)' : 'none')};
  z-index: ${({ isOpen }) => (isOpen ? '999' : '-1')};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const QandAModal = styled.div`
  width: 800px;
  height: 300px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 10px 10px 0 0;
`;

export const QandAModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 13px;
  margin-bottom: 10px;
  input {
    border: 1px solid ${theme.color.gray};
    width: 750px;
    height: 30px;
    border-radius: 5px;
    &:focus {
      outline: none;
      border: 2px solid ${theme.color.yellow};
    }
  }
`;

export const QandAModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: 1px solid ${theme.color.gray};
    width: 750px;
    height: 150px;
    border-radius: 5px;
    &:focus {
      outline: none;
      border: 2px solid ${theme.color.yellow};
    }
  }
`;

export const QandAFooter = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
`;

export const IconWrapper = styled.div`
  margin-left: 25px;
`;

export const SubmitBtnContainer = styled.div``;

export const SubmitBtn = styled.button`
  border: none;
  background-color: ${theme.color.yellow};
  border-radius: 5px;
  width: 80px;
  height: 40px;
  margin-right: 25px;
  margin-top: 10px;
  cursor: pointer;
`;
