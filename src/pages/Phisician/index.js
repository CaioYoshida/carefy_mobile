import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import {
  ProfileImage,
  LabelContainer,
  Label,
  AddTelephoneButton,
  AddTelephoneButtonText,
  InformationView,
  Name,
  TelephoneList,
  TelephoneContainer,
  TelephoneInformation,
  TelephoneOptions,
  TelephoneOptionsButton,
  TelephoneDescription,
  Telephone,
} from './styles';

import Background from '../../components/Background';
import emptyProfile from '../../assets/empty-profile.png';


const Patients = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const { phisician_id } = route.params;
  const [phisicianName, setPhisicianName] = useState('');
  const [telephones, setTelephones] = useState([]);

  useEffect(() => {
    async function loadData() {
      const phisicianResponse = await api.get(`phisicians/${phisician_id}`);

      setPhisicianName(phisicianResponse.data.name);

      try {
        const telephoneResponse = await api.get(`telephones?owner=${phisician_id}`);

        setTelephones(telephoneResponse.data);
      } catch (error) {
        setTelephones([]);
      }
    }

    loadData();
  }, [isFocused]);

  async function handleAddTelephoneButton(telephone_id) {
    navigation.navigate('Telephone', { telephone_id, owner_id: phisician_id });
  };

  async function handleEditTelphoneButton(telephone_id) {
    navigation.navigate('Telephone', { telephone_id, owner_id: phisician_id });
  };

  async function handleDeleteTelephoneButton() {};

  return (
    <Background>
      <ProfileImage source={emptyProfile} />

      <LabelContainer>
        <Label>Name</Label>
      </LabelContainer>

      <InformationView>
        <Name>{phisicianName}</Name>
      </InformationView>

      <LabelContainer>
        <Label>Telephones</Label>
        <AddTelephoneButton onPress={() => handleAddTelephoneButton("")}>
          <AddTelephoneButtonText>+ Add telephone</AddTelephoneButtonText>
        </AddTelephoneButton>
      </LabelContainer>

      <TelephoneList
        data={telephones}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TelephoneInformation>
            <TelephoneContainer>
              <TelephoneDescription>{item.description}</TelephoneDescription>
              <Telephone>{`${item.area_code} ${item.number}`}</Telephone>
            </TelephoneContainer>
            <TelephoneOptions>
              <TelephoneOptionsButton onPress={
                () => handleEditTelphoneButton(item.id)
              }>
                <FontAwesome name="pencil" size={20} color="#000" />
              </TelephoneOptionsButton>
              <TelephoneOptionsButton onPress={handleDeleteTelephoneButton}>
                <FontAwesome name="trash" size={20} color="#000" />
              </TelephoneOptionsButton>
            </TelephoneOptions>
          </TelephoneInformation>
        )}
      >
      </TelephoneList>

    </Background>
  )
}

export default Patients;
