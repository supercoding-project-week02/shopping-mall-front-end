import ValidTest from '@/components/ValidTest/ValidTest';
import { InputDiv } from './UserInput.styles';

const UserInput = ({ button, name, value, password, validTest, isValid, ...rest }) => {
  return (
    <>
      <InputDiv>
        <input name={name} value={value} {...rest} />
        {button && button}
      </InputDiv>
      {validTest && (
        <ValidTest
          name={name}
          value={value}
          password={password}
          validTest={validTest}
          isValid={isValid}
        />
      )}
    </>
  );
};

export default UserInput;
