import React from 'react';

import { InputContainer, FormInput } from './styles';

const Input = ({ placeholder }) => {
  return (
    <InputContainer>
      <FormInput placeholder={placeholder}/>
    </InputContainer>
  )
}

export default Input;
