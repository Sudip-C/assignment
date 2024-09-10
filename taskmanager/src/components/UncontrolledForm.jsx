// src/components/UncontrolledForm.js
import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Uncontrolled input" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
