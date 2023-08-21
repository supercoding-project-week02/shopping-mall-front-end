import { useInput } from '@/hooks/useInput';
import * as S from '../WriteInput/WriteInput.styles';

const Select = ({ label, name, value, array, genres }) => {
  const { value: inputValue, onChange } = useInput(value);

  console.log(inputValue);
  return (
    <S.WriteTextFieldsWrapper>
      <S.WriteTextContainer>
        <S.WriteTextLabel>{label}</S.WriteTextLabel>
        <select name={name} id={name + '-selector'} value={inputValue} onChange={onChange}>
          {array.map((item, index) => {
            return (
              <option key={index} value={genres ? index + 1 : item}>
                {item}
              </option>
            );
          })}
        </select>
      </S.WriteTextContainer>
    </S.WriteTextFieldsWrapper>
  );
};

export default Select;
