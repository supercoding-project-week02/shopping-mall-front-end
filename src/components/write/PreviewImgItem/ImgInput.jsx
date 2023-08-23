import { useRef, useState } from 'react';

import {
  EmptyBox,
  InputContainer,
  StyledImgBox,
  StyledImgInput,
  StyledImgLabel,
} from './ImgInput.styles';

const ImgInput = ({
  index,
  name,
  value,
  label = '이미지 추가',
  setImgValue,
  many = false,
  ...rest
}) => {
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
    if (many) {
      setImgValue(index, inputRef.current.files[0]);
    } else {
      setImgValue(inputRef.current.files[0]);
    }
  };

  return (
    <InputContainer>
      <StyledImgBox>
        {imgFile === '' || imgFile === null ? <EmptyBox>+</EmptyBox> : <img src={imgFile} alt="" />}
      </StyledImgBox>
      <StyledImgLabel htmlFor={name}>{label}</StyledImgLabel>
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
