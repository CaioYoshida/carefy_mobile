import styled from 'styled-components/native';

export const PatientList = styled.FlatList`
  margin-top: 10px;
`;

export const PatientButton = styled.TouchableOpacity`
  background-color: #eee;
  height: 50px;
  flex: 1;
  margin: 4px;
  margin-top: 10px;
  border-radius: 8px;

  justify-content: center;
`;

export const PatientInformation = styled.View`
  margin-left: 8px;
  flex-direction: row;

  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const PatientText = styled.Text`
  color: #000;
  margin-left: 8px;
`;
