import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './Screen';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon: FunctionComponent<IconProps> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});

type IconProps = {
  name: string;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
};
