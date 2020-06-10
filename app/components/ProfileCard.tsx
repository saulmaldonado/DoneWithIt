import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import fonts from '../config/fonts';
import colors from '../config/colors';

const ProfileCard = ({ profileIcon, name, listings }: ProfileCardProps) => {
  return (
    <View style={styles.profileCard}>
      <Image source={profileIcon} style={styles.profileIcon} />
      <View style={styles.profileText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.listings}>{listings} Listings</Text>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  profileIcon: {
    height: 75,
    width: 75,
    borderRadius: 75,
  },
  profileText: {
    marginLeft: 10,
  },
  name: {
    fontSize: 13,
    fontFamily: fonts.primary,
  },
  listings: {
    fontSize: 13,
    fontFamily: fonts.primary,
    color: '#a9a9a9',
  },
});

interface ProfileCardProps {
  profileIcon: any;
  name: string;
  listings: number;
}
