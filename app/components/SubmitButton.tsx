import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';

const SubmitButton = ({ title }: AppSubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View>
      <AppButton title='Login' onPress={handleSubmit} />
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});

type AppSubmitButtonProps = {
  title: string;
};
