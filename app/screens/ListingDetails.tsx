import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';
import colors from '../config/colors';
import fonts from '../config/fonts';

const ListingDetails = ({ image, title, subTitle }: ListingDetailsProps) => {
  const profileImage = require('../assets/mosh.jpg');
  const profileName = 'Mosh Hamedani';

  return (
    <View style={styles.page}>
      <Image source={image} style={styles.image} resizeMode={'cover'} />
      <View style={styles.itemInfo}>
        <Text style={styles.text}>{title}</Text>
        <Text style={{ ...styles.text, color: colors.secondary }}>{subTitle}</Text>
      </View>
      <ProfileCard profileIcon={profileImage} title={profileName} subTitle={'5 Listings'} />
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f8f4f4',
    flex: 1,
  },
  image: {
    height: '40%',
    width: '100%',
  },
  itemInfo: {
    marginLeft: 15,
    marginBottom: 15,
    height: '15%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary,
  },
});

interface ListingDetailsProps {
  image: any;
  title: string;
  subTitle: string;
}
