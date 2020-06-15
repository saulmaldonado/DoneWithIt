import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppPriceField } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import * as yup from 'yup';
import colors from '../config/colors';
import AppImageInputList from '../components/AppImageInputList';

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
  image: yup.array().min(1, 'Must upload at least one image').label('Images'),
});

const initialValues = { title: '', price: 0, category: undefined, description: '', image: [] };

const ListingEditScreen = () => {
  const [imageUris, setImageUris] = useState<string[]>([]);
  return (
    <Screen style={{ padding: 10 }}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppImageInputList
          name='image'
          imageUris={imageUris}
          onAddImage={(imageUri) => {
            setImageUris([...imageUris, imageUri]);
          }}
          onRemoveImage={(index) => setImageUris(imageUris.filter((uri, i) => i !== index))}
        />
        <AppFormField name='title' placeholder='Title' autoCorrect={false} maxLength={255} />
        <AppPriceField name='price' />

        <AppFormPicker
          name='category'
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
