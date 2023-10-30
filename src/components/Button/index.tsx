/**
 *
 * Button
 *
 */

import React from 'react';
import {StyleSheet, Text, TextProps, TouchableOpacity} from 'react-native';

export const Button: React.FC<IButtonProps> = props => {
  const {label} = props;

  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'transparent',
    marginVertical: 4,
    marginTop: 30,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 12,
  },
  label: {
    color: 'grey',
  },
});

export interface IButtonProps
  extends TouchableOpacityProps,
    ContainedTouchableProperties {
  label?: string;
}

export default Button;
