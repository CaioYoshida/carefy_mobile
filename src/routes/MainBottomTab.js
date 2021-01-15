import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PatientStack from '../routes/PatientStack';
import Phisicians from '../pages/Phisicians';
import Appointments from '../pages/Appointments';

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
        component={Phisicians}
        options={{
          tabBarLabel: 'Phisicians'
        }}
      />
      <Tab.Screen
        name='Appointments'
        component={Appointments}
        options={{
          tabBarLabel: 'Appointments'
        }}
      />
    </Tab.Navigator>
  )
}
