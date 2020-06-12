import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';
import { useFormikContext, FormikErrors, FormikContextType, FormikTouched } from 'formik';
import { AppTextInputProps } from '../AppTextInput';

const AppFormField = ({ name, ...props }: AppFormFieldProps) => {
  const {
    handleChange,
    errors,
    setFieldTouched,
    touched,
  }: AppFormFieldUseFormikContext = useFormikContext<formSchema>();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...props}
      />

      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});

type AppFormFieldProps = {
  name: string;
} & AppTextInputProps;

type AppFormFieldUseFormikContext = {
  touched: FormikTouched<{ [name: string]: boolean }>;
  errors: FormikErrors<{ [name: string]: string }>;
} & Pick<FormikContextType<formSchema>, 'handleChange' | 'setFieldTouched'>;

type formSchema = {
  [name: string]: string | number | boolean;
};
