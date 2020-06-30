import React, { Context, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Formik, FormikConfig } from 'formik';
import generateSchema from './generateSchema';
import { Schema, ObjectSchema } from 'yup';

const AppForm = <T extends {}>({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps<T>) => (
  <Formik<T>
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={generateSchema(children, validationSchema)}
  >
    {() => {
      return <>{children}</>;
    }}
  </Formik>
);

export default AppForm;

const styles = StyleSheet.create({});

type AppFormProps<T> = {
  children: JSX.Element[];
  validationSchema?: ObjectSchema<any>;
} & Pick<FormikConfig<T>, 'initialValues' | 'onSubmit'>;
