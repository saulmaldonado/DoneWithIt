import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListActionDeleteAction from '../components/ListActionDeleteAction';

const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ProfileCard
            profileIcon={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => console.log('Message Selected')}
            renderRightActions={() => <ListActionDeleteAction onPress={() => console.log(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
