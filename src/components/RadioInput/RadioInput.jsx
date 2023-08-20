import { Container } from './RadioInput.styles';

const RadioInput = ({ id, name, value, defaultChecked, label }) => {
  return (
    <Container>
      <input type="radio" id={id} name={name} value={value} defaultChecked={defaultChecked} />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};

export default RadioInput;
