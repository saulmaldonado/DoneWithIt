import * as yup from 'yup';
import validations from './validationSchemas';

export default (children: JSX.Element[], validationSchema?: yup.ObjectSchema<any>) => {
  const existingSchema = validationSchema?.fields;
  const newValidationSchema: { [name: string]: yup.Schema<any> } = {};
  children.forEach(({ type: { name: typeName }, props: { name: fieldName } }) => {
    // checks for a name prop, this will creating schemas for elements that don't need one
    if (!fieldName || !Object.keys(validations).includes(typeName)) return;

    /* Input element combos that need more than one schema (such as confirming passwords)
     will need to have an array of names for their fields as the name prop */

    if (Array.isArray(fieldName)) {
      fieldName.forEach((fieldName, i) => {
        if (newValidationSchema[fieldName] || existingSchema?.[fieldName]) {
          throw new Error(`name: ${fieldName}, already exists in the form schema`);
        }
        newValidationSchema[fieldName] = (validations[typeName] as yup.Schema<any>[])[i];
      });
    } else {
      if (newValidationSchema[fieldName] || existingSchema?.[fieldName])
        throw new Error(`name: ${fieldName}, already exists in the form schema`);
      newValidationSchema[fieldName] = validations[typeName] as yup.Schema<any>;
    }
  });
  if (validationSchema) {
    // if there is an existing schema, both will be merged
    return validationSchema.concat(yup.object().shape(newValidationSchema));
  }

  return yup.object().shape(newValidationSchema);
};
