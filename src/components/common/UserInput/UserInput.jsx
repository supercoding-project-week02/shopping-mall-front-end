import { InputDiv } from './UserInput.styles';

const UserInput = ({ button, type, placeholder, onFocus, onBlur, value, required = false }) => {
  return (
    <InputDiv>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        required={required}
      />
      {button && button}
    </InputDiv>
  );
};

export default UserInput;
