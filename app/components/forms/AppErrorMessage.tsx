import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import colors from '../../config/colors';

const AppErrorMessage = ({ error, visible, style }: AppErrorMessageProps) => {
  if (!error || !visible) return null;

  return (
    <View style={[style]}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
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
  style?: ViewStyle;
};
