import { useState } from 'react';

export function useInput(initValue = '') {
  const [value, setValue] = useState(initValue);

  return {
    value,
    onChange: (event) => setValue(event.target.value),
    onReset: () => setValue(initValue),
  };
}
