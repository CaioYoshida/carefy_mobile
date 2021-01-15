import React from 'react';

import {
  PatientList,
  PatientButton,
  PatientInformation,
  ProfileImage,
  PatientText
} from './styles';

import Background from '../../components/Background';
import Input from '../../components/Input';

import emptyProfile from '../../assets/empty-profile.png';

const patients = [
  {
    id: 1,
    name: 'Caio'
  },
  {
    id: 2,
    name: 'Juliana'
  },
  {
    id: 3,
    name: 'Mara'
  },
  {
    id: 4,
    name: 'Gabi'
  }
]

const Patients = ({ navigation }) => {
  async function handlePatientButton(patient_id) {
    navigation.navigate('Patient', { patient_id });
  };

  return (
    <Background>
      <Input placeholder="Search"/>

      <PatientList
        data={patients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <PatientButton
            style={{ elevation: 2 }}
            onPress={() => handlePatientButton(item.id)}
          >
            <PatientInformation>
              <ProfileImage source={emptyProfile} />
              <PatientText>{item.name}</PatientText>
            </PatientInformation>
          </PatientButton>
        )}
      />
    </Background>
  )
}

export default Patients;
