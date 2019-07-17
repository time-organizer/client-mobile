import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';

import { colorsVariables } from '../constants/Colors';

const MyTextInput = ({ onChange, value, styles, label }) => (
  <TextInput
    onChangeText={onChange}
    style={{
      backgroundColor: colorsVariables.bgColor,
      ...styles,
    }}
    value={value}
    mode="outlined"
    label={label}
  />
);

MyTextInput.propTypes = {
  styles: PropTypes.shape(),
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
MyTextInput.defaultProps = {
  styles: {},
  value: '',
};

export default MyTextInput;
