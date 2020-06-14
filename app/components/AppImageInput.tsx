import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type AppImageInputProps = {
  imageUri: string | undefined;
  onChangeImage: (uri: string) => void;
};

const AppImageInput = ({ imageUri, onChangeImage }: AppImageInputProps) => {
  const requestPermission = async (): Promise<void> => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert('Permission is needed to access your camera roll');
      throw new Error('Permission denied');
    }
  };

  const getImage = async (): Promise<void> => {
    try {
      await requestPermission();
      const result = await ImagePicker.launchImageLibraryAsync();
      if (result.cancelled) {
        return;
      } else {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <View>
      <Button onPress={getImage} title='Upload Picture' />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 100, height: 100 }}
          resizeMode='contain'
        />
      )}
    </View>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({});
