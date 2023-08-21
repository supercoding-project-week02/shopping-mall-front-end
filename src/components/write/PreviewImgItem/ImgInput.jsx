import { useRef, useState } from 'react';

import {
  EmptyBox,
  InputContainer,
  StyledImgBox,
  StyledImgInput,
  StyledImgLabel,
} from './ImgInput.styles';

const ImgInput = ({ name, value, ...rest }) => {
  // TODO: 현재 예시 이미지를 img 안에 넣어놨습니다. 추후 수정예정
  // const { value: inputValue, onChange } = useInput('');
  const [imgFile, setImgFile] = useState(value);
  const inputRef = useRef();

  const saveImgFile = () => {
    const file = inputRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  console.log(imgFile);
  return (
    <InputContainer>
      <StyledImgBox>
        {imgFile === '' ? <EmptyBox>+</EmptyBox> : <img src={imgFile} alt="" />}
      </StyledImgBox>
      <StyledImgLabel htmlFor={name}>이미지 추가</StyledImgLabel>
      <StyledImgInput
        type="file"
        accept="image/*"
        id={name}
        name={name}
        ref={inputRef}
        onChange={saveImgFile}
        {...rest}
      />
    </InputContainer>
  );
};

export default ImgInput;
