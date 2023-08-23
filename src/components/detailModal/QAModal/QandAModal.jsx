import { Icon } from '@/components/common/Icon/Icon';
import React, { useRef, useState } from 'react';
import * as S from './QandAModal.styles';

export default function QandAModal({ isOpen, setIsOpen }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (evnet) => {
    try {
      const formData = new FormData();
      formData.append('productIdx', 123);
      formData.append('consumerIdx', 12345);
      formData.append('title', title);
      formData.append('content', content);
      formData.append('imageUrl', file);

      const response = await axios.put('http://52.79.168.48:8080/api/v1/questions', formData);
      console.log('Success:', response);
      setIsOpen(false);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const modalIsClose = () => {
    setIsOpen(false);
  };

  const fileInputRef = useRef(null);

  const iconClickHandle = () => {
    fileInputRef.current.click();
  };

  const fileInputChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <S.QandAModalBackground isOpen={isOpen}>
      <S.QandAModal isOpen={isOpen}>
        <S.IconContainer>
          <Icon name="IconX" size={15} onClick={modalIsClose} />
        </S.IconContainer>
        <form onSubmit={handleSubmit}>
          <S.QandAModalTitle>
            <input
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </S.QandAModalTitle>
          <S.QandAModalContent>
            <input
              type="text"
              placeholder="문의하실 내용을 적어주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </S.QandAModalContent>
          <S.QandAFooter>
            <S.IconWrapper>
              <Icon name="IconImage" size={30} onClick={iconClickHandle} />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                style={{ display: 'none' }}
                onChange={fileInputChange}
              />
            </S.IconWrapper>
            <S.SubmitBtnContainer>
              <S.SubmitBtn>작성</S.SubmitBtn>
            </S.SubmitBtnContainer>
          </S.QandAFooter>
        </form>
      </S.QandAModal>
    </S.QandAModalBackground>
  );
}
