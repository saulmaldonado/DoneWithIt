import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListActionDeleteAction = ({ onPress }: ListActionDeleteActionProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' color={colors.white} size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListActionDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface ListActionDeleteActionProps {
  onPress(): any;
}
