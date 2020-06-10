import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from '../components/Card';
import ProfileCard from '../components/ProfileCard';

const ListingDetails = () => {
  const profileImage = require('../assets/mosh.jpg');
  const profileName = 'Mosh Hamedani';
  const numberOfListings = 5;

  return (
    <View>
      <Card subTitle='$100' image={require('../assets/jacket.jpg')}>
        Red Jacket For Sale!
      </Card>
      <ProfileCard profileIcon={profileImage} name={profileName} listings={numberOfListings} />
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({});
