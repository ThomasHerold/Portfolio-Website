import { useState } from 'react';

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};
