import { InputDiv } from './UserInput.styles';

const UserInput = ({ check = false }) => {
  return (
    <InputDiv>
      <input type="text" />
      {check ? <button>중복확인</button> : null}
    </InputDiv>
  );
};

export default UserInput;
