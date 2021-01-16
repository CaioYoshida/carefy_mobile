import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Text } from 'react-native';

import api from '../../services/api';

import emptyProfile from '../../assets/empty-profile.png';

import Background from '../../components/Background';
import Input from '../../components/Input';

import {
  ProfileImage,
  LabelContainer,
  Label,
  PickerView,
  PickerTelephone,
  ButtonsContainer,
  SaveButtonContainer,
  ButtonText,
} from './styles';

const Telephone = ({ navigation, route }) => {
  const { patient_id } = route.params;
  const [name, setName] = useState('');
  const [telephones, setTelephones] = useState([]);
  const [
    preferredTelephoneSelected,
    setPreferredTelephoneSelected
  ] = useState('');

  useEffect(() => {
    async function loadData() {
      if (patient_id !== '') {
        const { data } = await api.get(`patients/${patient_id}`);

        setName(data.name);
        setPreferredTelephoneSelected(data.preferred_phone);
      }

      try {
        const telephoneResponse = await api.get(`telephones?owner=${patient_id}`);

        setTelephones(telephoneResponse.data);
      } catch (error) {
        setTelephones([]);
      }
    }

    loadData();
  }, []);

  async function handleSaveButton() {
    if (patient_id !== '') {
      await api.put(`patients/${patient_id}`, {
        name,
        preferred_phone: preferredTelephoneSelected,
      });

      navigation.goBack();
    } else {
      await api.post('patients', {
        name,
        preferred_phone: '',
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

      <LabelContainer>
        <FontAwesome name="phone" color="#000" size={20}/>
        <Label>Preferred phone</Label>
      </LabelContainer>
      <PickerView>
        {telephones && <PickerTelephone
          selectedValue={preferredTelephoneSelected}
          onValueChange={itemValue => setPreferredTelephoneSelected(itemValue)}
        >
          <PickerTelephone.Item label="" value=""/>
          {telephones.map(telephone => (
            <PickerTelephone.Item
              key={telephone.id}
              label={`${telephone.description} - ${telephone.area_code} ${telephone.number}`}
              value={telephone.id}
            />
          ))}
        </PickerTelephone>}
      </PickerView>

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
