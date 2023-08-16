import { useState } from 'react';

import * as S from './TextField.styles.jsx';
import { TextLabel } from './TextField.styles.jsx';

const TextField = ({ label, value, onlyView, rightSlot }) => {
  const [viewMode, setViewMode] = useState(true);

  return (
    <S.TextFieldsWrapper>
      <S.TextContainer>
        <S.TextLabel>{label}</S.TextLabel>
        <S.Value>{value}</S.Value>
        {rightSlot && rightSlot}
      </S.TextContainer>
    </S.TextFieldsWrapper>
  );
};

export default TextField;
