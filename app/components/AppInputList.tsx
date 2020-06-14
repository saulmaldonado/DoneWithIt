import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type AppInputListProps = {
  imageUris: string[];
  onAddImage: () => void;
  onRemoveImage: () => void;
};

const AppInputList = ({ imageUris, onAddImage, onRemoveImage }: AppInputListProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default AppInputList;

const styles = StyleSheet.create({});
