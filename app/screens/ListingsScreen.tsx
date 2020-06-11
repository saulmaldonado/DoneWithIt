import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';

const listings = [
  {
    id: 1,
    title: 'Red Jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch for sale',
    price: 400,
    image: require('../assets/couch.jpg'),
  },
];

const ListingsScreen = () => {
  return (
    <Screen>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <Card image={item.image} subTitle={`$ ${item.price}`}>
            {item.title}
          </Card>
        )}
        keyExtractor={({ id }) => id.toString()}
      ></FlatList>
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({});
