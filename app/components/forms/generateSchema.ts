import * as yup from 'yup';
import schemas from './validationSchemas';

export default (children: JSX.Element[], validationSchema?: yup.ObjectSchema<any>) => {
  const existingSchema = validationSchema?.fields;
  const newValidationSchema: { [name: string]: yup.Schema<any> } = {};

  //Map through each AppForm children component
  children.forEach(({ type: { name: typeName }, props: { name: fieldName, async } }) => {
    // checks for a name prop, this will creating schemas for elements that don't need one
    if (!fieldName || !Object.keys(schemas.validations).includes(typeName)) return;

    /* Input element combos that need more than one schema (such as confirming passwords)
     will need to have an array of names for their fields as the name prop */

    if (Array.isArray(fieldName)) {
      fieldName.forEach((fieldName, i) => {
        if (newValidationSchema[fieldName] || existingSchema?.[fieldName]) {
          throw new Error(`name: ${fieldName}, already exists in the form schema`);
        }
        newValidationSchema[fieldName] = (schemas.validations[typeName] as yup.Schema<any>[])[i];
      });
    } else {
      // Check for name collisions.
      if (newValidationSchema[fieldName] || existingSchema?.[fieldName]) {
        throw new Error(`name: ${fieldName}, already exists in the form schema`);
      }

      // Checks for optional prop on field. If true, schema will be taken out of the asyncValidation object
      if (async) {
        newValidationSchema[fieldName] = schemas.asyncValidations[typeName] as yup.Schema<any>;
      } else {
        newValidationSchema[fieldName] = schemas.validations[typeName] as yup.Schema<any>;
      }
    }
  });
  if (validationSchema) {
    // if there is an existing schema, both will be merged
    return validationSchema.concat(yup.object().shape(newValidationSchema));
  }

  return yup.object().shape(newValidationSchema);
};
