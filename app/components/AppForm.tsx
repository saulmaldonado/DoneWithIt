import React, { ReactChildren, ReactNodeArray } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
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
  initialValues: formSchema;
  onSubmit: (values: formSchema) => void;
  validationSchema: yup.ObjectSchema<yup.Shape<object | undefined, formSchema>>;
  children: JSX.Element[];
};

type formSchema = {
  [name: string]: string | number | boolean;
};
