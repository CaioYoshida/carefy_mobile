import styled from 'styled-components/native';

export const AppointmentContainer = styled.TouchableOpacity`
  background-color: #fbfbfb;
  border-radius: 8px;
  padding: 8px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const DatePickerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const SearchOptionPickerView = styled.View`
  height: 54px;
  width: 120px;
  background: #fff;
  border-radius: 8px;
  border: 0.5px solid #ddd;
`;

export const SearchOptionPicker = styled.Picker``;

export const SearchButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: #4c41f2;

  justify-content: center;
  align-items: center;
`;

export const InformationContainer = styled.View``;

export const PatientContainer = styled.View`
  margin-bottom: 6px;

  flex-direction: row;
  align-items: center;
`;

export const PhisicianContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateContainer = styled.View``;

export const Date = styled.Text``;

export const Name = styled.Text`
  margin-left: 6px;
`;

