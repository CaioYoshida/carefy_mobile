import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import Background from '../../components/Background';
import Input from '../../components/Input';

import {
  LabelContainer,
  Label,
  TelephoneInputContainer,
  ButtonsContainer,
  SaveButtonContainer,
  ButtonText,
} from './styles';

const Telephone = ({ navigation, route }) => {
  const { telephone_id, owner_id } = route.params;
  const [description, setDescription] = useState('');
  const [areaCode, setAreaCode] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    async function loadData() {
      if (telephone_id !== '') {
        const { data } = await api.get(`telephones/${telephone_id}`);

        setDescription(data.description);
        setAreaCode(data.area_code);
        setNumber(data.number);
      }
    }

    loadData();
  }, [])

  async function handleSaveButton() {
    if (telephone_id !== '') {
      await api.put(`telephones/${telephone_id}`, {
        description,
        area_code: areaCode,
        number
      });

      navigation.goBack();
    } else {
      await api.post('telephones', {
        description,
        area_code: areaCode,
        number,
        owner_id
      })

      setDescription('');
      setAreaCode('');
      setNumber('');
    }
  };

  return (
    <Background>
      <LabelContainer>
        <FontAwesome name="address-book" color="#000" size={20}/>
        <Label>Description</Label>
      </LabelContainer>
      <Input
        placeholder="Ex. Home"
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <LabelContainer>
        <FontAwesome name="phone" color="#000" size={20}/>
        <Label>Area Code</Label>
      </LabelContainer>
      <TelephoneInputContainer>
        <Input
          placeholder="Ex. 16"
          value={areaCode}
          onChangeText={text => setAreaCode(text)}
        />
      </TelephoneInputContainer>

      <LabelContainer>
        <FontAwesome name="phone" color="#000" size={20}/>
        <Label>Number</Label>
      </LabelContainer>
      <TelephoneInputContainer>
        <Input
          placeholder="Ex. 99999-9999"
          value={number}
          onChangeText={text => setNumber(text)}
        />
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
