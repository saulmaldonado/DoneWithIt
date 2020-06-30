import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppPicker from '../AppPicker';
import { useFormikContext, FormikTouched, FormikErrors, FormikContextType } from 'formik';
import { FormSchema } from './AppForm';
import AppErrorMessage from './AppErrorMessage';
import { MaterialCommunityIconType } from '../../config/icons';

const AppFormPicker = ({
  name,
  items,
  icon,
  placeholder,
  numColumns = 1,
  pickerType = null,
}: AppFormPickerProps) => {
  const [selected, setSelected] = useState();

  const {
    errors,
    setFieldTouched,
    touched,
    setFieldValue,
  }: AppFormPickerUseFormikContext = useFormikContext<FormSchema>();

  return (
    <>
      <AppPicker
        icon={icon}
        items={items}
        placeholder={placeholder}
        selectedItem={selected}
        onSelectItem={(item) => {
          setSelected(item);
          setFieldValue(name, item.value);
          setFieldTouched(name, true, false);
        }}
        numColumns={numColumns}
        style={{ width: '75%' }}
        pickerType={pickerType}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});

type AppFormPickerProps = {
  name: string;
  items: { label: string; value: any }[];
  icon?: MaterialCommunityIconType;
  placeholder: string;
  numColumns?: number;
  pickerType?: 'icon' | null;
};

type AppFormPickerUseFormikContext = {
  touched: FormikTouched<{ [name: string]: boolean }>;
  errors: FormikErrors<{ [name: string]: string }>;
} & Pick<FormikContextType<FormSchema>, 'handleChange' | 'setFieldTouched' | 'setFieldValue'>;
