import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Background from '../../components/Background';
import DatePicker from '../../components/DatePicker';
import AddButton from '../../components/AddButton';

import {
  SearchButton,
  AppointmentContainer,
  DatePickerContainer,
  SearchOptionPickerView,
  SearchOptionPicker,
  InformationContainer,
  PatientContainer,
  PhisicianContainer,
  DateContainer,
  Name,
  Date
} from './styles';

const appointments = [
  {
    id: 1,
    phisician: {
      id: 1,
      name: 'Joao Carvalho'
    },
    patient: {
      id: 1,
      name: 'Caio Yoshida'
    },
    start: '25/01/2021 15:00'
  },
  {
    id: 2,
    phisician: {
      id: 2,
      name: 'Camila Tavares'
    },
    patient: {
      id: 2,
      name: 'Juliana Amado'
    },
    start: '04/02/2021 17:00'
  },
  {
    id: 3,
    phisician: {
      id: 3,
      name: 'Camila Tavares'
    },
    patient: {
      id: 3,
      name: 'Juliana Amado'
    },
    start: '04/02/2021 17:00'
  },
  {
    id: 4,
    phisician: {
      id: 4,
      name: 'Camila Tavares'
    },
    patient: {
      id: 4,
      name: 'Juliana Amado'
    },
    start: '04/02/2021 17:00'
  },
  {
    id: 5,
    phisician: {
      id: 5,
      name: 'Camila Tavares'
    },
    patient: {
      id: 5,
      name: 'Juliana Amado'
    },
    start: '04/02/2021 17:00'
  },
  {
    id: 6,
    phisician: {
      id: 6,
      name: 'Camila Tavares'
    },
    patient: {
      id: 6,
      name: 'Juliana Amado'
    },
    start: '04/02/2021 17:00'
  },
  {
    id: 7,
    phisician: {
      id: 7,
      name: 'Camila Tavares'
    },
    patient: {
      id: 7,
      name: 'Juliana Amado'
    },
    start: '04/02/2021 17:00'
  }
]

const Appointment = ({ navigation }) => {
  const [searchOption, setSearchOption] = useState('none');
  const [date, setDate] = useState(new window.Date());

  async function hanldeAddAppointmentButton() {
    navigation.navigate('AppointmentForm', { appointment_id: '' });
  }

  async function handleAppointmentButton(appointment_id) {
    navigation.navigate('Appointment', { appointment_id })
  }

  return (
    <Background>
      <AddButton onPress={hanldeAddAppointmentButton}/>

      <DatePickerContainer>
        <SearchOptionPickerView>
          <SearchOptionPicker
            selectedValue={searchOption}
            onValueChange={itemValue => setSearchOption(itemValue)}
          >
            <SearchOptionPicker.Item label="None" value="none"/>
            <SearchOptionPicker.Item label="To" value="toDate"/>
            <SearchOptionPicker.Item label="From" value="fromDate"/>
          </SearchOptionPicker>
        </SearchOptionPickerView>

        <DatePicker
          initialDate={date}
          onChangeDate={setDate}
        />

        <SearchButton>
          <FontAwesome  name="search" color="#fff" size={20} />
        </SearchButton>
      </DatePickerContainer>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppointmentContainer
            style={{ elevation: 2 }}
            onPress={() => handleAppointmentButton(item.id)}
          >
            <InformationContainer>
              <PatientContainer>
                <FontAwesome name="user" color="#000" size={20} />
                <Name>{item.patient.name}</Name>
              </PatientContainer>
              <PhisicianContainer>
                <FontAwesome name="user-md" color="#000" size={20} />
                <Name>{item.phisician.name}</Name>
              </PhisicianContainer>
            </InformationContainer>

            <DateContainer>
              <Date>{item.start}</Date>
            </DateContainer>
          </AppointmentContainer>
        )}
      />
    </Background>
  )
}

export default Appointment;
