import { StyledButton } from './Button.styles';

const Button = ({
  bgColor,
  fontColor,
  width = '100%',
  height = '40px',
  border = 'none',
  borderRadius,
  text,
  ...rest
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      fontColor={fontColor}
      width={width}
      height={height}
      border={border}
      borderRadius={borderRadius}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
