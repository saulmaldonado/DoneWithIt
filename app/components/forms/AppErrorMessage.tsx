import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

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
    fontFamily: fonts.primary,
    paddingLeft: 15,
  },
});

type AppErrorMessageProps = {
  error: string | undefined;
  visible: boolean | undefined;
  style?: ViewStyle;
};
