import React from 'react';
import { Modal, Button, FlatList, StyleSheet } from 'react-native';
import PickerItem from './PickerItem';
import PickerItemIcon from './forms/PickerItemIcon';

const AppPickerModal = ({
  modalVisible,
  setModalVisible,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numColumns,
}: AppPickerModalProps) => {
  return (
    <Modal visible={modalVisible} animationType='slide'>
      <Button title='Close' onPress={() => setModalVisible(false)} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        numColumns={numColumns}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PickerItemComponent
            item={item}
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

const styles = StyleSheet.create({});

type AppPickerModalProps = {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
  items: any[];
  onSelectItem: (item: any) => void;
  numColumns: number;
  PickerItemComponent: typeof PickerItem | typeof PickerItemIcon;
};
