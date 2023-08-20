import { useState } from 'react';

export function useInputs(initValue = {}) {
  const [form, setForm] = useState(initValue);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    value: form,
    onChange: handleChange,
    onReset: () => setForm(initValue),
  };
}
