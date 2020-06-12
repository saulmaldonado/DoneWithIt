import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik, FormikConfig } from 'formik';

const AppForm = ({ initialValues, onSubmit, validationSchema, children }: AppFormProps) => {
  return (
    <Formik<FormSchema>
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
} & Pick<FormikConfig<FormSchema>, 'initialValues' | 'onSubmit' | 'validationSchema'>;

type FormSchema = {
  [name: string]: string | number | boolean;
};
