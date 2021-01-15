import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PatientStack from '../routes/PatientStack';
import PhisicianStack from '../routes/PhisicianStack';
import AppointmentStack from '../routes/AppointmentStack';

const Tab = createBottomTabNavigator();

export default function MainBottomTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#4c41f2',
        inactiveTintColor: '#bbb',
        labelStyle: { fontWeight: 'bold', fontSize: 14, paddingBottom: 5 }
      }}
    >
      <Tab.Screen
        name='Patients'
        component={PatientStack}
        options={{
          tabBarLabel: 'Patients'
        }}
      />
      <Tab.Screen
        name='Phisicians'
        component={PhisicianStack}
        options={{
          tabBarLabel: 'Phisicians'
        }}
      />
      <Tab.Screen
        name='Appointments'
        component={AppointmentStack}
        options={{
          tabBarLabel: 'Appointments'
        }}
      />
    </Tab.Navigator>
  )
}
