import React, { useState, useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

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
  const [phisicians, setPhisicians] = useState([]);

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('phisicians');

      setPhisicians(data);
    }

    loadData();
  }, []);

  async function handleSearchButton() {
    if (search === '') {
      const { data } = await api.get('phisicians');

      setPhisicians(data);
    } else {
      try {
        const { data } = await api.get(`phisicians?search=${search}`)

        setPhisicians(data);
      } catch (error) {
        setPhisicians([]);
      }
    }
  };

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

        <SearchButton onPress={handleSearchButton}>
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
