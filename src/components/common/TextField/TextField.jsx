import { useState } from 'react';

import { Icon } from '@/components/common/Icon/Icon.jsx';
import { useInput } from '@/hooks/useInput.js';
import * as S from './TextField.styles.jsx';

const TextField = ({ label, value, rightSlot, editable, inputType = 'text' }) => {
  const [viewMode, setViewMode] = useState(true);
  const { value: v, onChange } = useInput(value);

  return (
    <S.TextFieldsWrapper>
      <S.TextContainer>
        <S.TextLabel>{label}</S.TextLabel>
        {viewMode ? (
          <>
            <S.Value>{value}</S.Value>
            {editable && (
              <Icon name="IconPencil" size={16} onClick={() => setViewMode((prev) => !prev)} />
            )}
          </>
        ) : (
          <>
            <S.Input value={v} onChange={onChange} type={inputType} />
            <Icon name="IconCheck" size={25} onClick={() => setViewMode((prev) => !prev)} />
          </>
        )}

        {rightSlot && rightSlot}
      </S.TextContainer>
    </S.TextFieldsWrapper>
  );
};

export default TextField;
