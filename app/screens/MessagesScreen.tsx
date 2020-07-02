import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListActionDeleteAction from '../components/ListActionDeleteAction';

const initialMessages = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam mollis arcu, eu fermentum urna tristique ut. Morbi dictum, felis nec feugiat bibendum, arcu arcu vulputate dolor, eget ullamcorper tellus libero a massa. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam mollis arcu, eu fermentum urna tristique ut. Morbi dictum, felis nec feugiat bibendum, arcu arcu vulputate dolor, eget ullamcorper tellus libero a massa. ',
    image: require('../assets/default-profile.png'),
  },
  {
    id: 2,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam mollis arcu, eu fermentum urna tristique ut. Morbi dictum, felis nec feugiat bibendum, arcu arcu vulputate dolor, eget ullamcorper tellus libero a massa. ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam mollis arcu, eu fermentum urna tristique ut. Morbi dictum, felis nec feugiat bibendum, arcu arcu vulputate dolor, eget ullamcorper tellus libero a massa. ',
    image: require('../assets/default-profile.png'),
  },
];

interface message {
  id: number;
  title: string;
  description: string;
  image: any;
}

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            renderRightActions={() => <ListActionDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/default-profile.png'),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
