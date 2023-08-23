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
  ...rest
}) => {
  const [viewMode, setViewMode] = useState(true);
  const { value: v, onChange } = useInput(value);

  const handleChangeViewMode = () => {
    setViewMode(false);
  };
  const handleUpdateValue = () => {
    onSubmit(name, v);
    setViewMode(true);
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
            <S.Input value={v} onChange={onChange} type={inputType} autoFocus />
            <Icon name="IconCheck" size={25} onClick={handleUpdateValue} />
          </>
        )}
        {rightSlot && rightSlot}
      </S.TextContainer>
    </S.TextFieldsWrapper>
  );
};

export default TextField;
