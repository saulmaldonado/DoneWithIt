import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AppImageInput from './AppImageInput';
import { useFormikContext, FormikTouched, FormikErrors, FormikContextType } from 'formik';
import { FormSchema } from './forms/AppForm';
import { AppErrorMessage } from './forms';

type AppImageInputListProps = {
  name: string;
  imageUris: string[];
  onAddImage: (imageUri: string) => void;
  onRemoveImage: (index: number) => void;
};
type AppImageInputListUseFormikContext = {
  touched: FormikTouched<{ [name: string]: boolean }>;
  errors: FormikErrors<{ [name: string]: string }>;
} & Pick<FormikContextType<FormSchema>, 'setFieldValue' | 'setFieldTouched' | 'values'>;

const AppImageInputList = ({
  name,
  imageUris,
  onAddImage,
  onRemoveImage,
}: AppImageInputListProps) => {
  const {
    setFieldValue,
    errors,
    touched,
    values,
  }: AppImageInputListUseFormikContext = useFormikContext<FormSchema>();
  const scrollView = useRef<ScrollView | null>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.list}>
          {values[name].map((imageUri: string, index: number) => (
            <TouchableOpacity
              onPress={() => {
                setFieldValue(
                  name,
                  values[name].filter((uri: string, i: number) => index !== i)
                );
                onRemoveImage(index);
              }}
              key={index}
              style={styles.image}
            >
              <AppImageInput
                imageUri={imageUri}
                onChangeImage={(imageUri) => {
                  // setFieldValue(name, [...values[name][index], imageUri]);
                  setFieldValue(name, () => {
                    (values[name] as Array<string>).splice(index, 1, imageUri);
                    return values[name];
                  });
                }}
              />
            </TouchableOpacity>
          ))}
          <AppImageInput
            imageUri={undefined}
            onChangeImage={(imageUri) => {
              setFieldValue(name, [...values[name], imageUri]);
            }}
          />
        </View>
      </ScrollView>
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
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
