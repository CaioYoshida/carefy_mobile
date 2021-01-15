import styled from 'styled-components/native';

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;

  align-self: center;
`;

export const LabelContainer = styled.View`
  margin-top: 18px;
  margin-bottom: 4px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-size: 16px;
`;

export const AddTelephoneButton = styled.TouchableOpacity``;

export const AddTelephoneButtonText = styled.Text``;

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

export const TelephoneList = styled.FlatList`
  border-radius: 8px;
  height: 120px;
`;

export const TelephoneContainer = styled.View`
  margin-left: 5px;
`;

export const TelephoneInformation = styled.View`
  background-color: #fff;
  height: 50px;
  flex: 1;
  margin: 3px;
  margin-top: 4px;
  border-radius: 8px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const TelephoneOptions = styled.View`
  margin-right: 20px;
  flex-direction: row;
`;

export const TelephoneOptionsButton = styled.TouchableOpacity`
  margin-left: 25px;
`;

export const TelephoneDescription = styled.Text`
  color: #000;
  font-weight: bold;
  margin-left: 8px;
`;

export const Telephone = styled.Text`
  color: #999;
  font-weight: bold;
  margin-left: 8px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const EditButtonContainer = styled.TouchableOpacity`
  background-color: #999;
  margin: 15px 0;
  height: 50px;
  flex: 1;
  margin: 3px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const DeleteButtonContainer = styled.TouchableOpacity`
  background-color: #ff0000;
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
