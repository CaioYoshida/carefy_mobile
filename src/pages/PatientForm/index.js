import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

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
  const [patientInformation, setPatientInformation] = useState();
  const [name, setName] = useState('');

  useEffect(() => {
    async function loadData() {
      if (patient_id !== '') {
        const { data } = await api.get(`patients/${patient_id}`);

        setPatientInformation(data);
        setName(data.name);
      }
    }

    loadData();
  }, []);

  async function handleSaveButton() {
    if (patient_id !== '') {
      await api.put(`patients/${patient_id}`, {
        name,
        preferred_phone: patientInformation.preferred_phone
      });

      navigation.goBack();
    } else {
      await api.post('patients', {
        name,
        preferred_phone: ''
      });

      setName('');
    }
  };

  return (
    <Background>
      <ProfileImage source={emptyProfile} />

      <LabelContainer>
        <FontAwesome name="user" color="#000" size={20}/>
        <Label>Patient</Label>
      </LabelContainer>
      <Input
        placeholder='Full name'
        value={name}
        onChangeText={text => setName(text)}
        autoCapitalize='words'
      />

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
