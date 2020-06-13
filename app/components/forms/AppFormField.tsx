import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
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
  }: AppFormFieldUseFormikContext = useFormikContext<FormSchema>();

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
} & Pick<FormikContextType<FormSchema>, 'handleChange' | 'setFieldTouched'>;

type FormSchema = {
  [name: string]: string | number | boolean;
};
