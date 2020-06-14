import * as yup from 'yup';

const validations: validationsType = {
  AppNameField: yup.string().required().label('Name'),
  AppEmailField: yup.string().required().email().label('Email'),
  AppPasswordField: yup.string().required().min(4).label('Password'),
  AppFormPicker: yup.mixed().defined().label('Selector'),
  AppPriceField: yup.number().min(1).max(10000).label('Price'),
  AppPasswordConfirmationFields: [
    yup.string().required().min(4).label('Password'),
    yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .label('Re-enter Password'),
  ],
};

type validationsType = {
  [type: string]: yup.Schema<any> | yup.Schema<any>[];
};

export default validations;
