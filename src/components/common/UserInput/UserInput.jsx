import { InputDiv } from './UserInput.styles';

const UserInput = ({ button, ...rest }) => {
  return (
    <InputDiv>
      <input {...rest} />
      {button && button}
    </InputDiv>
  );
};

export default UserInput;
