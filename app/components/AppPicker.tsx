import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AppPickerModal from './AppPickerModal';

const AppPicker = ({ icon, placeholder, items, onSelectItem, selectedItem }: AppPickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
          <MaterialCommunityIcons name='chevron-down' size={25} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <AppPickerModal
        items={items}
        onSelectItem={onSelectItem}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
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
});

type AppPickerProps = {
  icon: string;
  placeholder: string;
  items: any[];
  selectedItem: any;
  onSelectItem: (item: any) => void;
  [key: string]: any;
};
