import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import { routes } from '../navigation/routes';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';

const ListingsScreen = ({ navigation }: any) => {
  const [listings, setListings] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title='Retry' onPress={loadListings}></AppButton>
        </>
      )}
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
