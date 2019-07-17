import { StyleSheet } from 'react-native';
import { colorsVariables } from '../../constants/Colors';

const inputStyles = {
  color: colorsVariables.textColor,
  shadowColor: '#000',
  borderStyle: 'solid',
  borderWidth: 2,
  borderTopColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: colorsVariables.accentColor,
  height: 50,
  width: '100%',
  paddingHorizontal: 10,
  marginBottom: 16,
};

export { inputStyles };
