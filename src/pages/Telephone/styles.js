import styled from 'styled-components';

export const TelephoneInputContainer = styled.View`
  margin-top: 10px;
`;

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
