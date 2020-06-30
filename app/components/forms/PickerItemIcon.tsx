import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PickerItemProps } from '../PickerItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialCommunityIconType } from '../../config/icons';

type PickerItemIconProps = {
  item: {
    icon?: {
      name: MaterialCommunityIconType;
      color: string;
    };
  };
} & PickerItemProps;

const PickerItemIcon = ({
  item: { label, icon: { name, color } = { name: 'crop-square', color: 'black' } },
  onPress,
}: PickerItemIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.roundIcon, { backgroundColor: color }]}>
        <MaterialCommunityIcons name={name} size={35} color='white' />
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItemIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  roundIcon: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 50,
    height: 75,
    width: 75,
  },
});
