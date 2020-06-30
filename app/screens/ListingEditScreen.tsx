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
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

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

const postListing = async ({
  title,
  price,
  categoryId,
  location,
  description,
  images,
}: Listing): Promise<void> => {
  const listingData = new FormData();
  const googleHQ = { longitude: '37.4220', latitude: '122.0841' };

  listingData.append('title', title);
  listingData.append('title', description);
  listingData.append('price', price.toString());
  listingData.append('categoryId', categoryId.toString());
  listingData.append('latitude', location?.latitude.toString() ?? googleHQ.latitude);
  listingData.append('longitude', location?.longitude.toString() ?? googleHQ.longitude);

  /**
   * A react native blob is just an object with an uri attribute. Name and type
   * properties are optional
   * https://github.com/facebook/react-native/blob/master/Libraries/Network/FormData.js
   */
  type FormDataImage = {
    uri: string;
    type?: string;
    name?: string;
  };

  images.forEach((i) => {
    let name: string;
    const match = i.match(/[a-z\-0-9]+.(jpg|png|tiff|heic|jpeg)$/i);

    if (match) {
      name = match[0];
    } else {
      throw new Error('Invalid image.');
    }

    let imageBlob: FormDataImage = {
      uri: i,
      type: 'image/jpeg',
      name: name,
    };
    listingData.append('images', imageBlob as any);
  });

  // testing token
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImV4cCI6MTc2NTc3ODQwMDAwMH0._esbrd7d82bOs3dVmQm4weuNDOwgW2YpWSeE9WhM0Fw';

  await fetch('http://192.168.29.192:8000/api/v1/listings', {
    headers: { Authorization: `Bearer ${token}` },
    method: 'POST',
    body: listingData,
  });
};

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={{ padding: 10 }}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => {
          try {
            postListing({ ...values, location } as Listing);
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
