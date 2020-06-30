import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppPriceField } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import * as yup from 'yup';
import colors from '../config/colors';
import useLocation from '../components/hooks/useLocation';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import { Listing } from '../api/schemas/Listing';
import listingsApi from '../api/listings';

const categories = [
  { label: 'Furniture', value: 1, icon: { name: 'lamp', color: colors.primary } },
  { label: 'Clothing', value: 2, icon: { name: 'shoe-heel', color: '#fd9644' } },
  { label: 'Cameras', value: 3, icon: { name: 'camera', color: '#fed330' } },
  { label: 'Cameras', value: 3, icon: { name: 'camera', color: '#fed330' } },
  { label: 'Cameras', value: 3, icon: { name: 'camera', color: '#fed330' } },
  { label: 'Cameras', value: 3, icon: { name: 'camera', color: '#fed330' } },
  { label: 'Cameras', value: 3, icon: { name: 'camera', color: '#fed330' } },
  { label: 'None', value: null },
];
const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).label('Title'),
  description: yup.string().optional().label('Description'),
});

const initialValues = {
  title: '',
  price: 0,
  categoryId: undefined,
  description: '',
  images: [],
};

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={{ padding: 10 }}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => {
          try {
            listingsApi.postListing({ ...values, location } as Listing);
          } catch (error) {
            console.log(error);
          }
        }}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name='images' />

        <AppFormField name='title' placeholder='Title' autoCorrect={false} maxLength={255} />

        <AppPriceField name='price' />

        <AppFormPicker
          name='categoryId'
          items={categories}
          placeholder='Category'
          pickerType='icon'
          numColumns={4}
        />

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
