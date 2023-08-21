import { useInput } from '@/hooks/useInput';
import * as S from './WriteInput.styles';

const WriteInput = ({ label, type, value }) => {
  const { value: inputValue, onChange } = useInput(value);

  return (
    <S.WriteTextFieldsWrapper>
      <S.WriteTextContainer>
        <S.WriteTextLabel>{label}</S.WriteTextLabel>
        <S.WriteInputBox type={type} value={inputValue} onChange={onChange} />
      </S.WriteTextContainer>
    </S.WriteTextFieldsWrapper>
  );
};

export default WriteInput;
