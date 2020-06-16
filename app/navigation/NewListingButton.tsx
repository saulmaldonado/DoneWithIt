import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

type NewListingButtonProps = {
  onPress: () => void;
};

const NewListingButton = ({ onPress }: NewListingButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 5,
    borderRadius: 35,
  },
});
