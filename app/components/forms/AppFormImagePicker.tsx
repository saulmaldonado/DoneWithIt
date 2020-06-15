import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppImageInputList from '../AppImageInputList';

type AppFormImagePickerProps = {
  name: string;
};

const AppFormImagePicker = ({ name }: AppFormImagePickerProps) => {
  const [imageUris, setImageUris] = useState<string[]>([]);

  return (
    <AppImageInputList
      name={name}
      imageUris={imageUris}
      onAddImage={(imageUri) => {
        setImageUris([...imageUris, imageUri]);
      }}
      onRemoveImage={(index) => setImageUris(imageUris.filter((uri, i) => i !== index))}
    />
  );
};

export default AppFormImagePicker;

const styles = StyleSheet.create({});
