/**
 *
 * ControlledTextInput
 *
 */

import React from 'react';
import {StyleSheet, View, Text, TextInput, TextInputProps} from 'react-native';
import {Control, Controller, FieldValues} from 'react-hook-form';

const ControlledTextInput: React.FC<IControlledTextInputProps> = props => {
  const {control, errorMessage, name, label, defaultValue, ...inputProps} =
    props;

  return (
    <>
      <Text style={styles.title}>{label}</Text>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...inputProps}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder={defaultValue}
            placeholderTextColor="#37B184"
            autoCapitalize="none"
          />
        )}
      />
      {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 2,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 40,
    color: 'grey',
    fontWeight: '700',
  },
  title: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    marginRight: 20,
    fontSize: 16,
    fontWeight: '700',
    color: 'grey',
  },
  error: {
    alignSelf: 'flex-start',
    marginVertical: 8,
    color: '#ff0033',
  },
});

export interface IControlledTextInputProps extends TextInputProps {
  control: Control<FieldValues> | undefined;
  errorMessage: string;
  name: string;
  label: string;
}
export default ControlledTextInput;
