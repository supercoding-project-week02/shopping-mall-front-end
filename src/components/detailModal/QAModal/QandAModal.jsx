import { Icon } from '@/components/common/Icon/Icon';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './QandAModal.styles';
import { client } from '@/apis';

export default function QandAModal({
  isOpen,
  setIsOpen,
  updateQnA,
  updateData,
  productId,
  syncQuestion,
}) {
  const [title, setTitle] = useState(updateData ? updateData.title : '');
  const [content, setContent] = useState(updateData ? updateData.content : '');
  const [file, setFile] = useState(null);
  const [titleIsValid, setTitleIsValid] = useState(true);
  const [titleIsTouched, setTitleIsTouched] = useState(true);
  const [contentIsValid, setContentIsValid] = useState(true);
  const [contentIsTouched, setContentIsTouched] = useState(true);
  const titleRef = useRef();
  const contentRef = useRef();
  const fileInputRef = useRef(null);

  // console.log('updateQnA=>', updateQnA);

  useEffect(() => {
    setTitle(updateData ? updateData.title : '');
    setContent(updateData ? updateData.content : '');
  }, [updateData?.title, updateData?.content]);

  // evnet, 상품문의? 수정버튼?
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log('title', title);
    console.log('content', content);
    setTitleIsTouched(true);
    setContentIsTouched(true);

    const currentDate = new Date();

    const formatdDate =
      currentDate.getFullYear() +
      '.' +
      String(currentDate.getMonth() + 1).padStart(2, '0') +
      '.' +
      String(currentDate.getDate()).padStart(2, '0');

    // // updateData
    // const isAddMode = !updateData;
    // // id, updated

    // if (isAddMode === !updateData) {
    //   onAddQnA({
    //     productIdx: productId,
    //     title: title,
    //     content: content,
    //     file: file,
    //     // date: formatdDate,
    //   });
    // }

    // onUpdateQnA(updateData.questionId, {
    //   ...updateData,
    //   title: title,
    //   content: content,
    //   // file: file,
    //   date: formatdDate,
    // });

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

    const formData = new FormData();
    formData.append('productIdx', productId);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('imageUrl', file);

    // updatedData 가 없으면 새로 추가,
    // updatedData 가 수정
    // Object.keys(empty).length === 0
    const 추가기능 = !!Object.keys(updateData ?? {}).length == 0;
    if (추가기능) {
      // 추가한다.
      client
        .post('/questions/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          syncQuestion();
          setIsOpen(false);
        })
        .catch((error) => {
          console.log('Error:', error);
        });
    } else {
      // 수정모드
      // 수정 기능 - 수정 버튼을 눌렀을 때
      client
        .post(
          `/questions/${updateData.questionId}`,
          {
            questionId: updateData.qusetionId,
            content: content,
            title: title,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        )
        .then((response) => {
          syncQuestion();
        });
    }
  };

  // console.log('updateData', updateData);

  useEffect(() => {
    if (updateQnA) {
      setTitle(updateQnA.title);
      setContent(updateQnA.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [updateQnA]);

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

  const titleInValid = !titleIsValid && titleIsTouched;
  const contentInValid = !contentIsValid && contentIsTouched;
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
                // ref={titleRef}
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
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpg, image/png, image/jpeg"
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
