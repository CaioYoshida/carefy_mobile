import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  position: absolute;
  right: 10px;
  bottom: 0px;

  opacity: 0.8;

  background: #4c41f2;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;

  z-index: 5;
`;
