import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

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

import emptyProfile from '../../assets/empty-profile.png';

const Patients = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('patients');

      setPatients(data);
    }

    loadData();
  }, [])

  async function handleSearchButton() {
    if (search === '') {
      const { data } = await api.get('patients');

      setPatients(data);
    } else {
      const { data } = await api.get(`patients?search=${search}`)

      setPatients(data);
    }
  }

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
          <SearchInput
            placeholder='Search Patient'
            value={search}
            onChangeText={text => setSearch(text)}
            autoCapitalize='words'
          />
        </SearchInputContainer>

        <SearchButton onPress={handleSearchButton}>
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
