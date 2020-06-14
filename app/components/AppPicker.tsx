import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ViewStyle } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AppPickerModal from './AppPickerModal';
import PickerItemIcon from './forms/PickerItemIcon';
import PickerItem from './PickerItem';

const AppPicker = ({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  style,
  numColumns,
  pickerType,
}: AppPickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          <Text style={selectedItem ? styles.text : styles.placeholderText}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons name='chevron-down' size={25} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <AppPickerModal
        items={items}
        onSelectItem={onSelectItem}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        PickerItemComponent={pickerType === 'icon' ? PickerItemIcon : PickerItem}
        numColumns={numColumns}
      ></AppPickerModal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.primary,
    flex: 1,
    textAlignVertical: 'center',
  },
  placeholderText: {
    fontSize: 15,
    fontFamily: fonts.primary,
    flex: 1,
    textAlignVertical: 'center',
    color: colors.medium,
  },
});

type AppPickerProps = {
  icon?: string;
  placeholder: string;
  items: any[];
  selectedItem: any;
  onSelectItem: (item: any) => void;
  style?: ViewStyle;
  numColumns: number;
  pickerType: 'icon' | null;
};
