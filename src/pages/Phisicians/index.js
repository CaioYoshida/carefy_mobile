import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
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
    name: 'Joao'
  },
  {
    id: 2,
    name: 'Augusto'
  },
  {
    id: 3,
    name: 'Maria'
  },
  {
    id: 4,
    name: 'Camila'
  }
]

const Phisicians = ({ navigation }) => {
  const [search, setSearch] = useState('');

  async function handlePatientButton(phisician_id) {
    navigation.navigate('Phisician', { phisician_id });
  };

  return (
    <Background>
      <SearchContainer>
        <SearchInputContainer>
          <SearchInput
            placeholder="Search Phisician"
            value={search}
            onChangeText={text => setSearch(text)}
            autoCapitalize='words'
          />
        </SearchInputContainer>

        <SearchButton>
          <FontAwesome  name="search" color="#fff" size={20} />
        </SearchButton>
      </SearchContainer>

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
