import * as S from '../WriteInput/WriteInput.styles';

const Select = ({ label, name, value, array, handleChange }) => {
  const onChange = (e) => {
    handleChange(e.target.name, e.target.value);
  };
  return (
    <S.WriteTextFieldsWrapper>
      <S.WriteTextContainer>
        <S.WriteTextLabel>{label}</S.WriteTextLabel>
        <select name={name} id={name + '-selector'} value={value} onChange={onChange}>
          {array.map((item, index) => {
            return (
              <option key={index} value={item}>
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
