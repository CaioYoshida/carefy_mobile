import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

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
  const isFocused = useIsFocused();
  const { appointment_id } = route.params;
  const [appointment, setAppointment] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get(`appointments/${appointment_id}`);

      setAppointment(data);
    }

    loadData();
  }, [isFocused]);

  async function handleEditAppointmentButton() {
    navigation.navigate('AppointmentForm', { appointment_id })
  }

  async function handleDeleteAppointmentButton() {
    await api.delete(`appointments/${appointment_id}`);

    navigation.goBack();
  }

  return (
    <Background>

      {appointment && (
        <>
          <LabelContainer>
            <FontAwesome name="user" color="#000" size={20}/>
            <Label>Patient</Label>
          </LabelContainer>
          <InformationView>
            <PatientName>{appointment.patient.name}</PatientName>
          </InformationView>

          <LabelContainer>
            <FontAwesome name="user-md" color="#000" size={20}/>
            <Label>Phisician</Label>
          </LabelContainer>
          <InformationView>
            <PatientName>{appointment.phisician.name}</PatientName>
          </InformationView>

          <LabelContainer>
            <Label>Date</Label>
          </LabelContainer>
          <InformationView>
            <PatientName>
              {format(parseISO(appointment.start), "MMMM dd',' yyyy", {locale: pt})}
            </PatientName>
          </InformationView>
        </>
      )}

      <ButtonsContainer>
        <EditButtonContainer
          style={{ elevation: 2 }}
          onPress={handleEditAppointmentButton}
        >
          <ButtonText>Edit</ButtonText>
        </EditButtonContainer>

        <DeleteButtonContainer
          style={{ elevation: 2 }}
          onPress={handleDeleteAppointmentButton}
        >
          <ButtonText>Delete</ButtonText>
        </DeleteButtonContainer>
      </ButtonsContainer>

    </Background>
  )
}

export default Patients;
