import styled from '@emotion/styled';

import {
  Input,
  TextContainer,
  TextFieldsWrapper,
  TextLabel,
} from '@/components/common/TextField/TextField.styles';

export const WriteTextFieldsWrapper = styled(TextFieldsWrapper)`
  box-sizing: border-box;
`;

export const WriteTextContainer = styled(TextContainer)`
  border-bottom: 1px solid gray;
`;

export const WriteTextLabel = styled(TextLabel)`
  width: 70px;
  text-align: center;
`;

export const WriteInputBox = styled(Input)`
  border: none;
  background-color: inherit;
`;
