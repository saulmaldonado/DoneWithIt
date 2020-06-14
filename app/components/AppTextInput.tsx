import React from 'react';
import { StyleSheet, View, TextInput, TextInputProps, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';

const AppTextInput = ({ icon, iconSize = 35, style, ...props }: AppTextInputProps) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          color={colors.medium}
          style={styles.icon}
        />
      )}

      <TextInput style={styles.textInput} {...props} placeholderTextColor={colors.medium} />
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
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    fontSize: 15,
    fontFamily: fonts.primary,
    color: colors.dark,
    flex: 1,
  },
});

export type AppTextInputProps = {
  icon?: string;
  iconSize?: number;
  style?: ViewStyle;
} & TextInputProps;
