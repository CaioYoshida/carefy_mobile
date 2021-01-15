import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Phisicians from '../pages/Phisicians';
import Phisician from '../pages/Phisician';
import Telephone from '../pages/Telephone';

const Stack = createStackNavigator();

export default function PhisicianStack() {
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
        name="Phisicians"
        component={Phisicians}
        options={{
          title: 'Phisicians'
        }}
      />
      <Stack.Screen
        name="Phisician"
        component={Phisician}
        options={{
          title: 'Phisician'
        }}
      />
      <Stack.Screen
        name="Telephone"
        component={Telephone}
        options={{
          title: 'Telephone Information'
        }}
      />
    </Stack.Navigator>
  )
}
