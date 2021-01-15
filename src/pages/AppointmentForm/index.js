import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  LabelContainer,
  Label,
  PickerView,
  PickerProfile,
  ButtonsContainer,
  EditButtonContainer,
  ButtonText,
} from './styles';

import Background from '../../components/Background';
import DatePicker from '../../components/DatePicker';

const Patients = ({ navigation, route }) => {
  const { appointment_id } = route.params;

  async function handleSaveAppointmentButton() {}

  return (
    <Background>

      <LabelContainer>
        <FontAwesome name="user" color="#000" size={20}/>
        <Label>Patient</Label>
      </LabelContainer>
      <PickerView
        selectValue=""
      >
        <PickerProfile>
          <PickerProfile.Item label="" value=""/>
          <PickerProfile.Item label="Caio Yoshida" value="Caio"/>
          <PickerProfile.Item label="Juliana Amado" value="Juliana"/>
        </PickerProfile>
      </PickerView>

      <LabelContainer>
        <FontAwesome name="user-md" color="#000" size={20}/>
        <Label>Phisician</Label>
      </LabelContainer>
      <PickerView
        selectValue=""
      >
        <PickerProfile>
          <PickerProfile.Item label="" value=""/>
          <PickerProfile.Item label="Joao Carvalho" value="Caio"/>
          <PickerProfile.Item label="Camila Tavares" value="Juliana"/>
        </PickerProfile>
      </PickerView>

      <LabelContainer>
        <Label>Date</Label>
      </LabelContainer>
      <DatePicker />

      <ButtonsContainer>
        <EditButtonContainer
          style={{ elevation: 2 }}
          onPress={handleSaveAppointmentButton}
        >
          <ButtonText>Save</ButtonText>
        </EditButtonContainer>
      </ButtonsContainer>

    </Background>
  )
}

export default Patients;
