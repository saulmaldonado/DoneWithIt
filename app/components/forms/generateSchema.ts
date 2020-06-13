import * as yup from 'yup';
import validations from './validationSchemas';
import { FormikConfig } from 'formik';
import { FormSchema } from './AppForm';

export default (children: JSX.Element[], validationSchema?: yup.ObjectSchema<any>) => {
  const existingSchema = validationSchema?.fields;
  const newValidationSchema: any = {};
  children.forEach(({ type: { name: typeName }, props: { name: fieldName } }) => {
    if (!fieldName) return;
    if (fieldName instanceof Array) {
      fieldName.forEach((fieldName, i) => {
        if (newValidationSchema[fieldName] || existingSchema?.[fieldName])
          throw new Error(`name: ${fieldName}, already exists in the form schema`);

        newValidationSchema[fieldName] = (validations[typeName] as yup.Schema<any>[])[i];
      });
    } else {
      if (newValidationSchema[fieldName] || existingSchema?.[fieldName])
        throw new Error(`name: ${fieldName}, already exists in the form schema`);
      newValidationSchema[fieldName] = validations[typeName];
    }
  });
  if (validationSchema) {
    let asdasd = validationSchema.concat(yup.object().shape(newValidationSchema));
    console.log(asdasd);
    return asdasd;
  }

  return yup.object().shape(newValidationSchema);
};
