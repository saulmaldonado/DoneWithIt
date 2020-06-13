import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppFormField from './AppFormField';
import { useFormikContext, withFormik } from 'formik';
import * as yup from 'yup';
import { formValidation } from './AppForm';

const AppPasswordConfirmationFields = ({
  password,
  confirmPassword,
  setFormValidation,
}: AppPasswordConfirmationFieldsProps) => {
  const formValidationContext: any = useContext(formValidation);

  useEffect(() => {
    setFormValidation(
      formValidationContext.concat(
        yup.object().shape({
          password: yup.string().required().min(4).label('Password'),
          reenterPassword: yup
            .string()
            .required()
            .oneOf([yup.ref('password')], 'Passwords do not match')
            .label('Re-enter Password'),
        })
      )
    );
  }, []);

  return (
    <>
      <AppFormField
        name={password}
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Password'
        textContentType='password'
        secureTextEntry
      />
      <AppFormField
        name={confirmPassword}
        autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='Confirm Password'
        textContentType='password'
        secureTextEntry
      />
    </>
  );
};

export default AppPasswordConfirmationFields;

type AppPasswordConfirmationFieldsProps = {
  password: string;
  confirmPassword: string;
  setFormValidation: (validations: any) => void;
};

const styles = StyleSheet.create({});
