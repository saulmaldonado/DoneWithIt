import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import fonts from '../config/fonts';
import colors from '../config/colors';

const Card = ({ children: title, subTitle, image }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode={'cover'} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    height: 325,
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
  image: any;
}
