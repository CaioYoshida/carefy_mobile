import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

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

const Appointment = ({ navigation }) => {
  const [searchOption, setSearchOption] = useState('none');
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new window.Date());

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('appointments');

      setAppointments(data);
    }

    loadData();
  }, [])

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
                <Name>{item.patient_id}</Name>
              </PatientContainer>
              <PhisicianContainer>
                <FontAwesome name="user-md" color="#000" size={20} />
                <Name>{item.phisician_id}</Name>
              </PhisicianContainer>
            </InformationContainer>

            <DateContainer>
              <Date>
                {format(parseISO(item.start), "MMMM dd',' yyyy", {locale: pt})}
              </Date>
            </DateContainer>
          </AppointmentContainer>
        )}
      />
    </Background>
  )
}

export default Appointment;
