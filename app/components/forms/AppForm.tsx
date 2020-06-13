import React, { Context, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Formik, FormikConfig } from 'formik';
import generateSchema from './generateSchema';
import { Schema, ObjectSchema } from 'yup';

const AppForm = ({ initialValues, onSubmit, validationSchema, children }: AppFormProps) => {
  return (
    <Formik<FormSchema>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={generateSchema(children, validationSchema)}
    >
      {() => {
        return <>{children}</>;
      }}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});

type AppFormProps = {
  children: JSX.Element[];
  validationSchema?: ObjectSchema<any>;
} & Pick<FormikConfig<FormSchema>, 'initialValues' | 'onSubmit'>;

export type FormSchema = {
  [name: string]: any;
};
