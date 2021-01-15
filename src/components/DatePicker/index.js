import React, { useMemo, useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, subHours } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, DateButton, DateText } from './styles';

export default function DatePicker({ initialDate, onChangeDate }) {
  // subHours is been used to set TimeZone
  const [date, setDate] = useState(subHours(new Date(), 3));

  useEffect(() => {
    function loadDate() {
      initialDate && setDate(initialDate);
    }
    loadDate();
  }, [initialDate]);

  const [show, setShow] = useState(false);
  const dateFormatted = useMemo(
    () =>
      format(date, "MMMM dd',' yyyy", {
        locale: pt,
      }),
    [date],
  );

  function showDatePicker() {
    setShow(true);
  }

  function onChange(event, selectedDate) {
    setShow(Platform.OS === 'ios');
    const currentDate = selectedDate || date;

    setDate(currentDate);
    onChangeDate(currentDate);
  }

  return (
    <Container>
      <DateButton onPress={() => showDatePicker()}>
        <Icon name="calendar" size={20} color="#999" />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
            mode="date"
            display="default"
          />
        )}
      </View>
    </Container>
  );
}
