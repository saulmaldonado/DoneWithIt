import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import AppActivityIndicator from '../components/AppActivityIndicator';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import { routes } from '../navigation/routes';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import useApi from '../components/hooks/useApi';

const ListingsScreen = ({ navigation }: any) => {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      {error && (
        <>
          <Text>Couldn't retrieve the listings.</Text>
          <AppButton title='Retry' onPress={loadListings}></AppButton>
        </>
      )}
      {loading && <AppActivityIndicator visible={loading} />}
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
