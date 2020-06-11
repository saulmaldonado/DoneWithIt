import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetails from './app/screens/ListingDetails';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/components/Icon';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetails
        image={require('./app/assets/jacket.jpg')}
        title='Red jacket for sale'
        subTitle='$100'
      /> */}
      {/* <MessagesScreen /> */}
      {/* <MyAccountScreen /> */}
      {/* <ListingsScreen /> */}
      <AppTextInput icon='email' placeholder='Email' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
