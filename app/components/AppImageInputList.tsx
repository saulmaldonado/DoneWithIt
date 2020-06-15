import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AppImageInput from './AppImageInput';
import App from '../../App';

type AppImageInputListProps = {
  imageUris: string[];
  onAddImage: (imageUri: string) => void;
  onRemoveImage: (index: number) => void;
};

const AppImageInputList = ({ imageUris, onAddImage, onRemoveImage }: AppImageInputListProps) => {
  const scrollView = useRef<ScrollView | null>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.list}>
          {imageUris.map((imageUri, index) => (
            <TouchableOpacity onPress={() => onRemoveImage(index)} key={index} style={styles.image}>
              <AppImageInput
                imageUri={imageUri}
                onChangeImage={(imageUri) => onAddImage(imageUri)}
              />
            </TouchableOpacity>
          ))}
          <AppImageInput imageUri={undefined} onChangeImage={(imageUri) => onAddImage(imageUri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppImageInputList;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
