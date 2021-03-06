import React from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
      return;
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} resizeMode='cover' />
      ) : (
        <TouchableOpacity onPress={getImage}>
          <View style={styles.addImageButton}>
            <MaterialCommunityIcons size={50} name='camera' color={colors.medium} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppImageInput;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
  addImageButton: {
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100%',
  },
});
