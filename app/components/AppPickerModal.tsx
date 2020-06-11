import React from 'react';
import { StyleSheet, Text, View, Modal, Button, FlatList } from 'react-native';
import PickerItem from './PickerItem';

const AppPickerModal = ({
  modalVisible,
  setModalVisible,
  items,
  onSelectItem,
}: AppPickerModalProps) => {
  return (
    <Modal visible={modalVisible} animationType='slide'>
      <Button title='Close' onPress={() => setModalVisible(false)} />
      <FlatList
        data={items}
        keyExtractor={({ value }) => value.toString()}
        renderItem={({ item }) => (
          <PickerItem
            label={item.label}
            onPress={() => {
              setModalVisible(false);
              onSelectItem(item);
            }}
          />
        )}
      />
    </Modal>
  );
};

export default AppPickerModal;

type AppPickerModalProps = {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
  items: any[];
  onSelectItem: (item: any) => void;
};
