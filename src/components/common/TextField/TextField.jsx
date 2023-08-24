import { useState } from 'react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import { useInput } from '@/hooks/useInput.js';
import * as S from './TextField.styles.jsx';

const TextField = ({
  label,
  name,
  value,
  rightSlot,
  editable,
  inputType = 'text',
  onSubmit,
  onChangeInput,
  maxLength,
  validate,
  ...rest
}) => {
  const [viewMode, setViewMode] = useState(true);
  const { value: v, onChange, onChangeValue } = useInput(value);

  const handleChangeViewMode = () => {
    setViewMode(false);
  };

  // GYU-TODO: 코드가 지저분해진 느낌.. ㅠㅠ
  // input 에 validate 를 어떻게 처리할지 고민하기!!
  const handleUpdateValue = () => {
    if (validate) {
      const validateResult = validate(v);
      if (validateResult) {
        onSubmit(name, v);
        setViewMode(true);
      }
      return;
    }

    onSubmit(name, v);
    setViewMode(true);
  };

  const handleChange = (event) => {
    if (onChangeInput) {
      const value = onChangeInput(event);
      onChangeValue(value);
      return;
    }

    onChange(event);
  };

  return (
    <S.TextFieldsWrapper {...rest}>
      <S.TextContainer>
        {label && <S.TextLabel>{label}</S.TextLabel>}
        {viewMode ? (
          <>
            <S.Value>{value}</S.Value>
            {editable && <Icon name="IconPencil" size={16} onClick={handleChangeViewMode} />}
          </>
        ) : (
          <>
            <S.Input
              value={v}
              onChange={handleChange}
              type={inputType}
              autoFocus
              maxLength={maxLength}
            />
            <Icon name="IconCheck" size={25} onClick={handleUpdateValue} />
          </>
        )}
        {rightSlot && rightSlot}
      </S.TextContainer>
    </S.TextFieldsWrapper>
  );
};

export default TextField;
