import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  LabelContainer,
  Label,
  InformationView,
  PatientName,
  ButtonsContainer,
  EditButtonContainer,
  DeleteButtonContainer,
  ButtonText,
} from './styles';

import Background from '../../components/Background';

const Patients = ({ navigation, route }) => {
  const { appointment_id } = route.params;

  async function handleEditAppointmentButton() {
    navigation.navigate('AppointmentForm', { appointment_id })
  }

  return (
    <Background>

      <LabelContainer>
        <FontAwesome name="user" color="#000" size={20}/>
        <Label>Patient</Label>
      </LabelContainer>
      <InformationView>
        <PatientName>Caio Yoshida</PatientName>
      </InformationView>

      <LabelContainer>
        <FontAwesome name="user-md" color="#000" size={20}/>
        <Label>Phisician</Label>
      </LabelContainer>
      <InformationView>
        <PatientName>Joao Carvalho</PatientName>
      </InformationView>

      <LabelContainer>
        <Label>Date</Label>
      </LabelContainer>
      <InformationView>
        <PatientName>25/01/2021 15:00</PatientName>
      </InformationView>

      <ButtonsContainer>
        <EditButtonContainer
          style={{ elevation: 2 }}
          onPress={handleEditAppointmentButton}
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
