import * as yup from 'yup';
import asyncValidation from './AsyncTestMethods';

const validations: validationsType = {
  AppNameField: yup.string().trim().required().label('Name'),
  AppEmailField: yup.string().trim().lowercase().required().email().label('Email'),
  AppPasswordField: yup.string().required().min(4).label('Password'),
  AppFormPicker: yup.mixed().defined().label('Selector'),
  AppPriceField: yup.number().required().min(1).max(10000).label('Price'),
  AppFormImagePicker: yup.array().min(1, 'Must upload at least one image').label('Images'),
  AppPasswordConfirmationFields: [
    yup.string().required().min(4).label('Password'),
    yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .label('Re-enter Password'),
  ],
};

const asyncValidations: validationsType = {
  AppEmailField: yup
    .string()
    .trim()
    .lowercase()
    .required()
    .email()
    .test('is-taken', 'Email is already taken', asyncValidation.checkEmailAvailability)
    .label('Email'),
};

type validationsType = Record<string, yup.Schema<any>[] | yup.Schema<any>>;

export default { validations, asyncValidations };
