import React from 'react';

import { InputContainer, FormInput } from './styles';

const Input = ({ placeholder, value, onChangeText, autoCapitalize }) => {
  return (
    <InputContainer>
      <FormInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
      />
    </InputContainer>
  )
}

export default Input;
