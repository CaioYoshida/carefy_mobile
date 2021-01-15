import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import emptyProfile from '../../assets/empty-profile.png';

import Background from '../../components/Background';
import Input from '../../components/Input';

import {
  ProfileImage,
  LabelContainer,
  Label,
  ButtonsContainer,
  SaveButtonContainer,
  ButtonText,
} from './styles';

const Telephone = ({ navigation, route }) => {
  const { patient_id } = route.params;

  async function handleSaveButton() {};

  return (
    <Background>
      <ProfileImage source={emptyProfile} />

      <LabelContainer>
        <FontAwesome name="user" color="#000" size={20}/>
        <Label>Patient</Label>
      </LabelContainer>
      <Input placeholder="Full name"/>

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
