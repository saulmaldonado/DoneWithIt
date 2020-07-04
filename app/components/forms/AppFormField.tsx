import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';
import { useFormikContext, FormikErrors, FormikContextType, FormikTouched } from 'formik';
import { AppTextInputProps } from '../AppTextInput';

const AppFormField = ({ name, errorStyle, ...props }: AppFormFieldProps) => {
  const {
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
    values,
  }: AppFormFieldUseFormikContext = useFormikContext<FormSchema>();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => {
          setFieldValue(name, text);
        }}
        value={values[name]}
        {...props}
      />

      <AppErrorMessage error={errors[name]} visible={touched[name]} style={errorStyle} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});

type AppFormFieldProps = {
  name: string;
  errorStyle?: ViewStyle;
} & AppTextInputProps;

type AppFormFieldUseFormikContext = {
  touched: FormikTouched<Record<string, boolean>>;
  errors: FormikErrors<Record<string, string>>;
} & Pick<FormikContextType<FormSchema>, 'setFieldTouched' | 'setFieldValue' | 'values'>;

type FormSchema = {
  [name: string]: any;
};
