import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
`;

export const SearchButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 8px;
  background-color: #4c41f2;

  justify-content: center;
  align-items: center;
`;

export const SearchInputContainer = styled.View`
  padding: 2px;
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  margin-right: 10px;
`;

export const SearchInput = styled.TextInput`
  background: #fff;
  color: #666;
  font-size: 18px;
`;

export const PatientList = styled.FlatList`
  margin-top: 10px;
`;

export const PatientButton = styled.TouchableOpacity`
  background-color: #fbfbfb;
  height: 50px;
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
