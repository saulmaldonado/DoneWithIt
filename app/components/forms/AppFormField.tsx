import React from 'react';
import { StyleSheet, ViewStyle, View, Text } from 'react-native';
import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';
import { useFormikContext, FormikErrors, FormikContextType, FormikTouched } from 'formik';
import { AppTextInputProps } from '../AppTextInput';
import colors from '../../config/colors';
import fonts from '../../config/fonts';

const AppFormField = ({ name, errorStyle, placeholder, ...props }: AppFormFieldProps) => {
  const {
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
    values,
  }: AppFormFieldUseFormikContext = useFormikContext<FormSchema>();

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{placeholder}</Text>
      </View>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => {
          setFieldValue(name, text);
        }}
        value={values[name]}
        placeholder={placeholder}
        invalid={errors[name] && touched[name]}
        {...props}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} style={errorStyle} />
    </View>
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  label: {
    paddingLeft: 15,
  },
  labelText: {
    fontSize: 15,
    color: colors.dark,
    fontFamily: fonts.primary,
  },
});

type AppFormFieldProps = {
  name: string;
  errorStyle?: ViewStyle;
  placeholder?: string;
} & AppTextInputProps;

type AppFormFieldUseFormikContext = {
  touched: FormikTouched<Record<string, boolean>>;
  errors: FormikErrors<Record<string, string>>;
} & Pick<FormikContextType<FormSchema>, 'setFieldTouched' | 'setFieldValue' | 'values'>;

type FormSchema = {
  [name: string]: any;
};
