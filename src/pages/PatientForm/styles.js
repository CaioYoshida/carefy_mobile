import styled from 'styled-components';

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 50px;

  align-self: center;
`;

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

export const PickerTelephone = styled.Picker``;

export const ButtonsContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const SaveButtonContainer = styled.TouchableOpacity`
  background-color: #008000;
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
