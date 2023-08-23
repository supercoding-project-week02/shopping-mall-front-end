import { Container } from './RadioInput.styles';

const RadioInput = ({ id, name, value, label, ...rest }) => {
  return (
    <Container>
      <input type="radio" id={id} name={name} value={value} {...rest} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default RadioInput;
