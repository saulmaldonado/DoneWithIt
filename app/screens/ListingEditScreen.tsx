import React from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppPriceField } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import * as yup from 'yup';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
  { label: 'None', value: null },
];
const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  description: yup.string().optional().label('Description'),
});

const initialValues = { title: '', price: 0, category: undefined, description: '' };

const ListingEditScreen = () => {
  return (
    <Screen style={{ padding: 10 }}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField name='title' placeholder='Title' autoCorrect={false} maxLength={255} />
        <AppPriceField name='price' />

        <AppFormPicker name='category' items={categories} placeholder='Category' />
        <AppFormField
          name='description'
          placeholder='Description'
          maxLength={255}
          multiline
          numberOfLines={3}
        />

        <SubmitButton title='Post' />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
