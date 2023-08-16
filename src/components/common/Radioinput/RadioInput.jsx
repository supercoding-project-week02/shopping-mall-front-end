const RadioInput = () => {
  return (
    <span>
      <input type="radio" id="buyer" name="user" value="buyer" checked />
      <label htmlFor="buyer">구매자</label>
    </span>
  );
};

export default RadioInput;
