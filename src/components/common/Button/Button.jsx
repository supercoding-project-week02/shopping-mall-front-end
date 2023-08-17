import { StyledButton } from './Button.styles';

const Button = ({
  bgColor,
  fontColor,
  width = '100%',
  height = '40px',
  onClick,
  border = 'none',
  borderRadius,
  text,
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      fontColor={fontColor}
      width={width}
      height={height}
      onClick={onClick}
      border={border}
      borderRadius={borderRadius}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
