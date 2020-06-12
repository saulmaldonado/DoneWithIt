import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';

const AppErrorMessage = ({ error }: AppErrorMessageProps) => {
  if (!error) return null;

  return <Text style={styles.error}>{error}</Text>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

type AppErrorMessageProps = {
  error: string | undefined;
};
