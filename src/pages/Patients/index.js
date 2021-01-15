import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  PatientList,
  PatientButton,
  PatientInformation,
  ProfileImage,
  PatientText
} from './styles';

import Background from '../../components/Background';
import AddButton from '../../components/AddButton';
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
  async function handleAddPatientButton() {
    navigation.navigate('PatientForm', { patient_id: '' });
  };

  async function handlePatientButton(patient_id) {
    navigation.navigate('Patient', { patient_id });
  };

  return (
    <Background>
      <AddButton onPress={handleAddPatientButton} />

      <SearchContainer>
        <SearchInputContainer>
          <SearchInput placeholder="Search Patient"/>
        </SearchInputContainer>

        <SearchButton>
          <FontAwesome  name="search" color="#fff" size={20} />
        </SearchButton>
      </SearchContainer>

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
