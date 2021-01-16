import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import {
  ProfileImage,
  LabelContainer,
  Label,
  AddTelephoneButton,
  AddTelephoneButtonText,
  InformationView,
  PatientName,
  TelephoneList,
  TelephoneContainer,
  TelephoneInformation,
  TelephoneOptions,
  TelephoneOptionsButton,
  TelephoneDescription,
  Telephone,
  ButtonsContainer,
  EditButtonContainer,
  DeleteButtonContainer,
  ButtonText,
} from './styles';

import Background from '../../components/Background';
import emptyProfile from '../../assets/empty-profile.png';

const Patients = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const { patient_id } = route.params;
  const [patientName, setPatientName] = useState('');
  const [telephonesLength, setTelephonesLength] = useState(0);
  const [telephones, setTelephones] = useState([]);

  useEffect(() => {
    async function loadData() {
      const patientResponse = await api.get(`patients/${patient_id}`);

      setPatientName(patientResponse.data.name);

      try {
        const telephoneResponse = await api.get(`telephones?owner=${patient_id}`);

        setTelephones(telephoneResponse.data);
        setTelephonesLength(telephoneResponse.data.length);
      } catch (error) {
        setTelephones([]);
      }
    }

    loadData();
  }, [isFocused, telephonesLength]);

  async function handleAddTelephoneButton(telephone_id) {
    navigation.navigate('Telephone', { telephone_id, owner_id: patient_id });
  };

  async function handleEditTelphoneButton(telephone_id) {
    navigation.navigate('Telephone', { telephone_id, owner_id: patient_id });
  };

  async function handleDeleteTelephoneButton(telephone_id) {
    await api.delete(`telephones/${telephone_id}`);

    setTelephonesLength(telephonesLength - 1);
  };

  async function handleEditPatientButton() {
    navigation.navigate('PatientForm', { patient_id })
  }

  async function handleDeletePatientButton() {
    telephones.map(async telephone => {
      await api.delete(`telephones/${telephone.id}`);
    });

    await api.delete(`patients/${patient_id}`);

    navigation.goBack();
  };


  return (
    <Background>
      <ProfileImage source={emptyProfile} />

      <LabelContainer>
        <Label>Name</Label>
      </LabelContainer>

      <InformationView>
        <PatientName>{patientName}</PatientName>
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
              <TelephoneOptionsButton
                onPress={() => handleEditTelphoneButton(item.id)}
              >
                <FontAwesome name="pencil" size={20} color="#000" />
              </TelephoneOptionsButton>
              <TelephoneOptionsButton
                onPress={() => handleDeleteTelephoneButton(item.id)}
              >
                <FontAwesome name="trash" size={20} color="#000" />
              </TelephoneOptionsButton>
            </TelephoneOptions>
          </TelephoneInformation>
        )}
      >
      </TelephoneList>

      <ButtonsContainer>
        <EditButtonContainer
          style={{ elevation: 2 }}
          onPress={handleEditPatientButton}
        >
          <ButtonText>Edit</ButtonText>
        </EditButtonContainer>

        <DeleteButtonContainer
          style={{ elevation: 2 }}
          onPress={handleDeletePatientButton}
        >
          <ButtonText>Delete</ButtonText>
        </DeleteButtonContainer>
      </ButtonsContainer>

    </Background>
  )
}

export default Patients;
