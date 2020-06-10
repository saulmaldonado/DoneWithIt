import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import fonts from '../config/fonts';
import colors from '../config/colors';

const ProfileCard = ({ profileIcon, title, subTitle, onPress }: ProfileCardProps) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.profileCard}>
        <Image source={profileIcon} style={styles.profileIcon} />
        <View style={styles.profileText}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.listings}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  profileCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
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
  title: string;
  subTitle: string;
  onPress(): void;
}
