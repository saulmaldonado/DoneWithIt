import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik, FormikConfig } from 'formik';
import * as yup from 'yup';

const AppForm = ({ initialValues, onSubmit, validationSchema, children }: AppFormProps) => {
  return (
    <Formik<formSchema>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});

type AppFormProps = {
  children: JSX.Element[];
} & Pick<FormikConfig<formSchema>, 'initialValues' | 'onSubmit' | 'validationSchema'>;

type formSchema = {
  [name: string]: string | number | boolean;
};
