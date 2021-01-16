import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import {
  LabelContainer,
  Label,
  PickerView,
  PickerProfile,
  ButtonsContainer,
  EditButtonContainer,
  ButtonText,
} from './styles';

import Background from '../../components/Background';
import DatePicker from '../../components/DatePicker';

const Patients = ({ navigation, route }) => {
  const { appointment_id } = route.params;
  const [patients, setPatients] = useState([]);
  const [phisicians, setPhisicians] = useState([]);
  const [patientSelected, setPatientSelected] = useState('')
  const [phisicianSelected, setPhisicianSelected] = useState('')
  const [appointmentDate, setAppointmentDate] = useState(new window.Date());

  useEffect(() => {
    async function loadData() {
      const patientsResponse = await api.get('patients');
      const phisiciansResponse = await api.get('phisicians');

      setPatients(patientsResponse.data);
      setPhisicians(phisiciansResponse.data);

      if (appointment_id !== '') {
        const appointmentResponse = await api.get(`appointments/${appointment_id}`);

        setPatientSelected(appointmentResponse.data.patient_id);
        setPhisicianSelected(appointmentResponse.data.phisician_id);
        setAppointmentDate(appointmentResponse.data.start);
      }
    }

    loadData();
  }, [])

  async function handleSaveAppointmentButton() {
    const appointmentData = {
      patient_id: patientSelected,
      phisician_id: phisicianSelected,
      start: appointmentDate
    };

    if (appointment_id !== '') {
      await api.put(`appointments/${appointment_id}`, appointmentData);

      navigation.goBack();
    } else {
      await api.post('appointments', appointmentData);

      setPatientSelected('');
      setPhisicianSelected('');
      setAppointmentDate(new window.Date());
    }
  }

  return (
    <Background>

      <LabelContainer>
        <FontAwesome name='user' color='#000' size={20}/>
        <Label>Patient</Label>
      </LabelContainer>
      <PickerView>
        <PickerProfile
          selectedValue={patientSelected}
          onValueChange={itemValue => setPatientSelected(itemValue)}
        >
          <PickerProfile.Item label="" value=""/>
          {patients && patients.map(patient => (
            <PickerProfile.Item
              key={patient.id}
              label={patient.name}
              value={patient.id}
            />
          ))}
        </PickerProfile>
      </PickerView>

      <LabelContainer>
        <FontAwesome name="user-md" color="#000" size={20}/>
        <Label>Phisician</Label>
      </LabelContainer>
      <PickerView>
        <PickerProfile
          selectedValue={phisicianSelected}
          onValueChange={itemValue => setPhisicianSelected(itemValue)}
        >
          <PickerProfile.Item label="" value=""/>
          {phisicians && phisicians.map(phisician => (
            <PickerProfile.Item
              key={phisician.id}
              label={phisician.name}
              value={phisician.id}
            />
          ))}
        </PickerProfile>
      </PickerView>

      <LabelContainer>
        <Label>Date</Label>
      </LabelContainer>
      <DatePicker
        initialDate={new Date(appointmentDate)}
        onChangeDate={setAppointmentDate}
      />

      <ButtonsContainer>
        <EditButtonContainer
          style={{ elevation: 2 }}
          onPress={handleSaveAppointmentButton}
        >
          <ButtonText>Save</ButtonText>
        </EditButtonContainer>
      </ButtonsContainer>

    </Background>
  )
}

export default Patients;
