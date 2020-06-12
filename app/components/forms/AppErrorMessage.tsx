import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../config/colors';

const AppErrorMessage = ({ error, visible }: AppErrorMessageProps) => {
  if (!error || !visible) return null;

  return <Text style={styles.error}>{error}</Text>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
    paddingLeft: 10,
  },
});

type AppErrorMessageProps = {
  error: string | undefined;
  visible: boolean | undefined;
};