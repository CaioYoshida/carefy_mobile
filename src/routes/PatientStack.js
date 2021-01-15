import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Patients from '../pages/Patients';
import Patient from '../pages/Patient';
import Telephone from '../pages/Telephone';
import PatientForm from '../pages/PatientForm';

const Stack = createStackNavigator();

export default function PatientStack() {
  return (
    <Stack.Navigator
      initialRouteName="Patients"
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
        name="Patients"
        component={Patients}
        options={{
          title: 'Patients'
        }}
      />
      <Stack.Screen
        name="Patient"
        component={Patient}
        options={{
          title: 'Patient Information'
        }}
      />
      <Stack.Screen
        name="Telephone"
        component={Telephone}
        options={{
          title: 'Telephone Information'
        }}
      />
      <Stack.Screen
        name="PatientForm"
        component={PatientForm}
        options={{
          title: 'Patient Form'
        }}
      />
    </Stack.Navigator>
  )
}
