import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type PickerItemProps = {
  item: {
    label: string;
    value: number | null;
  };
  onPress: () => void;
};

const PickerItem = ({ item: { label }, onPress }: PickerItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
