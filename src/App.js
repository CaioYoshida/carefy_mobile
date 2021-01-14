import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import MainBottomTab from './routes/MainBottomTab';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#4c41f2" barStyle="light-content" />
      <NavigationContainer>
        <MainBottomTab />
      </NavigationContainer>
    </>
  );
};

export default App;
