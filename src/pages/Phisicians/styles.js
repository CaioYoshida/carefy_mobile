import styled from 'styled-components/native';

export const PhisicianList = styled.FlatList`
  margin-top: 10px;
`;

export const PhisicianButton = styled.TouchableOpacity`
  background-color: #eee;
  height: 50px;
  flex: 1;
  margin: 4px;
  margin-top: 10px;
  border-radius: 8px;

  justify-content: center;
`;

export const PhisicianInformation = styled.View`
  margin-left: 8px;
  flex-direction: row;

  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

export const PhisicianText = styled.Text`
  color: #000;
  margin-left: 8px;
`;
