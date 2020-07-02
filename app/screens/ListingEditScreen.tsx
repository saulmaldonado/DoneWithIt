import React, { useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppPriceField } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import * as yup from 'yup';
import colors from '../config/colors';
import useLocation from '../components/hooks/useLocation';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import { EditListingForm } from '../api/schemas/Listing';
import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';
import { FormikHelpers } from 'formik';

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

const initialValues: EditListingForm = {
  title: '',
  price: '',
  categoryId: undefined,
  description: '',
  images: [],
};

const ListingEditScreen = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleUploadProgress = ({ loaded, total }: ProgressEvent) =>
    setProgress((loaded / total) * 100);

  const handleSubmit = async (
    listing: EditListingForm,
    onUpload: any,
    { resetForm }: FormikHelpers<EditListingForm>
  ) => {
    const result = await listingsApi.postListing({ ...listing, location }, onUpload);
    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save listing.');
    }
    resetForm();
  };

  return (
    <Screen style={{ padding: 10 }}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onFinish={() => setUploadVisible(false)}
      />
      <AppForm<EditListingForm>
        initialValues={initialValues}
        onSubmit={async (values, formikHelpers) => {
          setProgress(0);
          setUploadVisible(true);
          try {
            await handleSubmit(values, handleUploadProgress, formikHelpers);
          } catch (error) {
            console.log(error);
            setUploadVisible(false);
          }
        }}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name='images' />

        <AppFormField name='title' placeholder='Title' autoCorrect={false} maxLength={255} />

        <AppPriceField name='price' />

        <AppFormPicker<EditListingForm>
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
