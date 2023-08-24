import * as S from './WriteInput.styles';

const WriteInput = ({ label, name, value, handleChange, ...rest }) => {
  const onChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };

  return (
    <S.WriteTextFieldsWrapper>
      <S.WriteTextContainer>
        <S.WriteTextLabel>{label}</S.WriteTextLabel>
        <S.WriteInputBox name={name} value={value} onChange={onChange} {...rest} />
      </S.WriteTextContainer>
    </S.WriteTextFieldsWrapper>
  );
};

export default WriteInput;
