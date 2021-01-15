import styled from 'styled-components/native';

export const LabelContainer = styled.View`
  margin-top: 18px;
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  margin-left: 8px;
  font-size: 16px;
`;

export const PickerView = styled.View`
  padding: 2px;
  background-color: #fff;
  border-radius: 8px;
`;

export const PickerProfile = styled.Picker``;

export const InformationView = styled.View`
  background-color: #fff;
  padding: 8px;
  margin-top: 6px;
  border-radius: 8px;

  justify-content: center;
`;

export const PatientName = styled.Text`
  color: #999;
  font-weight: bold;
  margin-left: 8px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const EditButtonContainer = styled.TouchableOpacity`
  background-color: #008000;
  margin: 15px 0;
  height: 50px;
  flex: 1;
  margin: 3px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
