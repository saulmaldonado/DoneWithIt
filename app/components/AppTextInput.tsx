import React from 'react';
import { StyleSheet, View, TextInput, TextInputProps, ViewStyle, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';
import { MaterialCommunityIconType } from '../config/icons';

const AppTextInput = ({ icon, iconSize = 35, style, invalid, ...props }: AppTextInputProps) => {
  return (
    <View style={[styles.container, style, invalid ? styles.invalid : null]}>
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
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
  },
  invalid: {
    borderColor: colors.danger,
    borderWidth: 2,
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
  icon?: MaterialCommunityIconType;
  iconSize?: number;
  style?: ViewStyle;
  invalid?: any;
} & TextInputProps;
