import React from 'react';

import Background from '../../components/Background';
import Input from '../../components/Input';

import {
  ButtonsContainer,
  SaveButtonContainer,
  ButtonText,
} from './styles';

const Telephone = ({ navigation, route }) => {
  const { patient_id } = route.params;

  async function handleSaveButton() {};

  return (
    <Background>
      <Input placeholder="Name"/>

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
