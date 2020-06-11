import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';

const AppTextInput = ({ icon, ...props }: AppTextInputProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={35} color={colors.medium} style={styles.icon} />
      )}

      <TextInput style={styles.textInput} {...props} />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    fontSize: 18,
    fontFamily: fonts.primary,
    color: colors.dark,
    flex: 1,
  },
});

type AppTextInputProps = {
  icon?: string;
  [key: string]: any;
};
