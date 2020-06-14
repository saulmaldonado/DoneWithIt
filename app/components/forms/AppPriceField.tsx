import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFormField from './AppFormField';

const AppPriceField = ({ name }: AppPriceFieldProps) => {
  return (
    <AppFormField
      name={name}
      placeholder='Price'
      maxLength={8}
      keyboardType='number-pad'
      iconSize={20}
      icon='square-inc-cash'
    />
  );
};

export default AppPriceField;

const styles = StyleSheet.create({});

type AppPriceFieldProps = {
  name: string;
};
