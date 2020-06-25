import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import { routes } from '../navigation/routes';
import listingsApi from '../api/listings';

const ListingsScreen = ({ navigation }: any) => {
  const [listings, setListings] = useState<any>([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <Card
            image={item.images[0].full}
            subTitle={`$${item.price}`}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          >
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
