import styled from '@emotion/styled';

import { theme } from '@/styles/theme.js';

export const ShippingAddressModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChargeAmountInput = styled.input`
  outline: none;
  border: none;
  padding: 0.5rem 0;
  font-size: 1.25rem;
  border-bottom: 1px solid black;
`;

export const ChargeButton = styled.button`
  margin-top: 2rem;
  border: 1px solid #03c761;
  background-color: #03c761;
  color: white;
  height: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:disabled {
    border: 1px solid ${theme.color.gray};
    background-color: ${theme.color.gray};
    cursor: inherit;
  }
`;
