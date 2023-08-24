import styled from '@emotion/styled';

// 기본 Modal UI
export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 450px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// ModalHeader
export const ModalHeader = styled.div`
  height: 30px;
  max-height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// ModalContent
export const ModalContent = styled.div``;
