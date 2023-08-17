import { InputDiv } from './UserInput.styles';

const UserInput = ({ button, type, placeholder }) => {
  return (
    <InputDiv>
      <input type={type} placeholder={placeholder} />
      {button && button}
    </InputDiv>
  );
};

export default UserInput;
