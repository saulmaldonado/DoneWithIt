import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';

const SubmitButton = ({ title, style }: AppSubmitButtonProps) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={[styles.button, style]}>
      <AppButton title={title} onPress={handleSubmit} />
    </View>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {},
});

type AppSubmitButtonProps = {
  title: string;
  style?: ViewStyle;
};
