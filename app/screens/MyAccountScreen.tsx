import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, SectionList, FlatList } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Screen from '../components/Screen';
import Icon from '../components/Icon';

const profile = {
  image: require('../assets/mosh.jpg'),
  title: 'Mosh Hamedani',
  subTitle: 'programmingwithmosh@gmail.com',
};
const MyAccountScreen = () => {
  return (
    <Screen>
      <ProfileCard
        profileIcon={profile.image}
        title={profile.title}
        subTitle={profile.subTitle}
        onPress={() => console.log('Account card pressed')}
      />
      <ProfileCard title='My Listings' IconComponent={<Icon name='format-list-bulleted' />} />
      <ProfileCard title='My Messages' IconComponent={<Icon name='email' />} />
      <ProfileCard title='Logout' IconComponent={<Icon name='logout' />} />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({});
