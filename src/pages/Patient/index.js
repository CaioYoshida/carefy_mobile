import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const telephones = [
  {
    id: 1,
    area_code: '16',
    number: '99999-8888',
    description: 'Home'
  },
  {
    id: 2,
    area_code: '16',
    number: '99999-7777',
    description: 'Home'
  },
  {
    id: 3,
    area_code: '16',
    number: '99999-6666',
    description: 'Work'
  }
]

const Patients = ({ navigation, route }) => {
  const { patient_id } = route.params;

  async function handleAddTelephoneButton(telephone_id) {
    navigation.navigate('Telephone', { telephone_id });
  };

  async function handleEditTelphoneButton(telephone_id) {
    navigation.navigate('Telephone', { telephone_id });
  };

  async function handleDeleteTelephoneButton() {};

  async function handleEditPatientButton() {
    navigation.navigate('PatientForm', { patient_id })
  }

  return (
    <Background>
      <ProfileImage source={emptyProfile} />

      <LabelContainer>
        <Label>Name</Label>
      </LabelContainer>

      <InformationView>
        <PatientName>Caio Yoshida</PatientName>
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

      <ButtonsContainer>
        <EditButtonContainer
          style={{ elevation: 2 }}
          onPress={handleEditPatientButton}
        >
          <ButtonText>Edit</ButtonText>
        </EditButtonContainer>

        <DeleteButtonContainer style={{ elevation: 2 }}>
          <ButtonText>Delete</ButtonText>
        </DeleteButtonContainer>
      </ButtonsContainer>

    </Background>
  )
}

export default Patients;