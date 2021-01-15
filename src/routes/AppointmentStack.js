import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Appointments from '../pages/Appointments';
import Appointment from '../pages/Appointment';
import AppointmentForm from '../pages/AppointmentForm';

const Stack = createStackNavigator();

export default function AppointmentStack() {
  return (
    <Stack.Navigator
      initialRouteName="Appointments"
      headerMode="screen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: { color: '#4c41f2', fontWeight: 'bold' },
        headerBackImage: () => (
          <MaterialIcons name="chevron-left" size={30} color="#4c41f2" />
        ),
        headerLeftContainerStyle: { marginLeft: 5 },
      }}
    >
      <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{
          title: 'Appointments'
        }}
      />
      <Stack.Screen
        name="Appointment"
        component={Appointment}
        options={{
          title: 'Appointment'
        }}
      />
      <Stack.Screen
        name="AppointmentForm"
        component={AppointmentForm}
        options={{
          title: 'Appointment Form'
        }}
      />
    </Stack.Navigator>
  )
}
