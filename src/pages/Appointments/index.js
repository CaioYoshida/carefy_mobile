import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
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
  const isFocused = useIsFocused();
  const [searchOption, setSearchOption] = useState('none');
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new window.Date());

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('appointments');

      setAppointments(data);
    }

    loadData();
  }, [isFocused]);

  async function handleSearchButton() {
    const formattedSearchDate = format(date, "yyyy'-'MM'-'dd");
    switch (searchOption) {
      case 'none':
        const noneResponse = await api.get('appointments');

        setAppointments(noneResponse.data);
        break;

      case 'toDate':
        const toDateResponse = await api
          .get(`appointments?toDate=${formattedSearchDate}`);

        setAppointments(toDateResponse.data);
        break;

      case 'fromDate':
        const fromDateResponse = await api
          .get(`appointments?fromDate=${formattedSearchDate}`);

        setAppointments(fromDateResponse.data);
        break;
    }
  }

  async function hanldeAddAppointmentButton() {
    navigation.navigate('AppointmentForm', { appointment_id: '' });
  };

  async function handleAppointmentButton(appointment_id) {
    navigation.navigate('Appointment', { appointment_id })
  };

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

        <SearchButton onPress={handleSearchButton}>
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
