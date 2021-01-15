import React from 'react';

import {
  PhisicianList,
  PhisicianButton,
  PhisicianInformation,
  ProfileImage,
  PhisicianText
} from './styles';

import Background from '../../components/Background';
import Input from '../../components/Input';

import emptyProfile from '../../assets/empty-profile.png';

const phisicians = [
  {
    id: 1,
    name: 'Caio'
  },
  {
    id: 2,
    name: 'Juliana'
  },
  {
    id: 3,
    name: 'Mara'
  },
  {
    id: 4,
    name: 'Gabi'
  }
]

const Phisicians = ({ navigation }) => {
  async function handlePatientButton(patient_id) {
    navigation.navigate('Patient', { patient_id });
  };

  return (
    <Background>
      <Input placeholder="Search"/>

      <PhisicianList
        data={phisicians}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <PhisicianButton
            style={{ elevation: 2 }}
            onPress={() => handlePatientButton(item.id)}
          >
            <PhisicianInformation>
              <ProfileImage source={emptyProfile} />
              <PhisicianText>{item.name}</PhisicianText>
            </PhisicianInformation>
          </PhisicianButton>
        )}
      />
    </Background>
  )
}

export default Phisicians;
