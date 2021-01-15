import React from 'react';

import Background from '../../components/Background';
import Input from '../../components/Input';

import {
  TelephoneInputContainer,
  ButtonsContainer,
  SaveButtonContainer,
  ButtonText,
} from './styles';

const Telephone = ({ navigation, route }) => {
  const { telephone_id } = route.params;

  async function handleSaveButton() {};

  return (
    <Background>
      <Input placeholder="Description"/>

      <TelephoneInputContainer>
        <Input placeholder="Area code"/>
      </TelephoneInputContainer>

      <TelephoneInputContainer>
        <Input placeholder="Telephone"/>
      </TelephoneInputContainer>

      <ButtonsContainer>
        <SaveButtonContainer
          style={{ elevation: 2 }}
          onPress={handleSaveButton}
        >
          <ButtonText>Save</ButtonText>
        </SaveButtonContainer>
      </ButtonsContainer>

    </Background>
  )
}

export default Telephone;
