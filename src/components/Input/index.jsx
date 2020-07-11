import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FaExclamation } from 'react-icons/fa';

import { Container, Error, InputComponent } from './styles';

export default function Input({ ...props }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <InputComponent ref={inputRef} {...props} />

      {error && (
        <Error title={error}>
          <FaExclamation />
        </Error>
      )}
    </Container>
  );
}
