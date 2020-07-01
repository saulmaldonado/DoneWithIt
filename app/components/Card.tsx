import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import fonts from '../config/fonts';
import colors from '../config/colors';

const Card = ({ children: title, subTitle, image, onPress }: CardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image uri={image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    height: 275,
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },
  image: {
    flex: 0.8,
    width: '100%',
  },
  textContainer: {
    flex: 0.2,
    padding: 15,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 15,
    fontFamily: fonts.primary,
  },
  subTitle: {
    fontSize: 15,
    fontFamily: fonts.primary,
    color: colors.secondary,
  },
});

interface CardProps {
  children: string;
  subTitle: string;
  image: string;
  onPress: () => void;
}
