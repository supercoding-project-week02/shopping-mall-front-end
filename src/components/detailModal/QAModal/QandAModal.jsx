import { Icon } from '@/components/common/Icon/Icon';
import React, { useRef, useState } from 'react';
import * as S from './QandAModal.styles';

export default function QandAModal({ isOpen, setIsOpen }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [titleIsTouched, setTitleIsTouched] = useState(true);
  const [contentIsValid, setContentIsValid] = useState(true);
  const [contentIsTouched, setContentIsTouched] = useState(true);
  const titleRef = useRef();
  const contentRef = useRef();
  const fileInputRef = useRef(null);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('title', title);
    console.log('content', content);
    setTitleIsTouched(true);
    setContentIsTouched(true);

    const isTitleValid = title.trim() !== '';
    const isContentValid = content.trim() !== '';
    if (!isTitleValid || !isContentValid) {
      if (!isTitleValid) {
        setTitleIsValid(false);
      }
      if (!isContentValid) {
        setContentIsValid(false);
      }
      return;
    }
    setTitleIsValid(true);
    setContentIsValid(true);
    setTitle('');
    setContent('');
    setIsOpen(false);

    // const formData = new FormData();
    // formData.append('productIdx', 123);
    // formData.append('consumerIdx', 12345);
    // formData.append('title', title);
    // formData.append('content', content);
    // formData.append('imageUrl', file);
    // const response = await axios
    //   .post('http://52.79.168.48:8080/api/v1/questions', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((response) => {
    //     console.log('Success:', response);
    //     setIsOpen(false);
    //   })
    //   .catch((error) => {
    //     console.log('Error:', error);
    //   });
  };

  const titleInValid = !titleIsValid && titleIsTouched;

  const contentInValid = !contentIsValid && contentIsTouched;

  const titleBlurHandler = (e) => {
    setTitleIsTouched(true);
    if (title.trim() === '') {
      setTitleIsValid(false);
      return;
    }
  };

  const contentBlurHandler = (e) => {
    setContentIsTouched(true);
    if (content.trim() === '') {
      setContentIsValid(false);
      return;
    }
  };

  const modalIsClose = () => {
    setIsOpen(false);
  };

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
        <form onSubmit={formSubmitHandler}>
          <S.QandAModalTitle>
            <S.InputTitleContainer>
              <input
                type="text"
                placeholder="제목"
                value={title}
                ref={titleRef}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={titleBlurHandler}
              />
              {titleInValid && <p>제목을 작성해주세요.</p>}
            </S.InputTitleContainer>
          </S.QandAModalTitle>
          <S.QandAModalContent>
            <S.InputContentContainer>
              <input
                type="text"
                placeholder="문의 내용"
                value={content}
                ref={contentRef}
                onChange={(e) => setContent(e.target.value)}
                onBlur={contentBlurHandler}
              />
              {contentInValid && <p>문의하실 내용을 작성해주세요.</p>}
            </S.InputContentContainer>
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
